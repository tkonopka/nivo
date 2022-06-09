import { computeDimensions, computePositionFromAnchor, getLegendTitleDatum } from '../compute'
import { BoxLegendProps, SymbolShapeCanvas, ThemeProps } from '../types'
import { renderBoxLegendItemToCanvas } from './BoxLegendCanvasItem'

export type BoxLegendCanvasProps = Omit<
    BoxLegendProps,
    | 'itemBackground'
    | 'itemOpacity'
    | 'effects'
    | 'onClick'
    | 'onMouseEnter'
    | 'onMouseLeave'
    | 'toggleSerie'
>

export const renderBoxLegendToCanvas = (
    ctx: CanvasRenderingContext2D,
    {
        containerWidth,
        containerHeight,
        translateX = 0,
        translateY = 0,
        anchor,

        data,
        title,
        direction,
        padding = 0,
        justify = false,

        // items
        itemsSpacing = 0,
        itemWidth,
        itemHeight,
        itemDirection = 'left-to-right',
        itemTextColor,

        // symbol
        symbolShape = 'square',
        symbolSize = 16,
        symbolSpacing = 8,
        symbolBorderColor,
        symbolBorderWidth,

        theme,
    }: BoxLegendCanvasProps & ThemeProps
) => {
    const allData = title ? [getLegendTitleDatum(title)].concat(data) : data

    const { width, height, itemCoordinates } = computeDimensions({
        itemWidth,
        itemHeight,
        itemsSpacing,
        direction,
        padding,
        data: allData,
    })
    const { x, y } = computePositionFromAnchor({
        anchor,
        translateX,
        translateY,
        containerWidth,
        containerHeight,
        width,
        height,
    })

    ctx.save()
    ctx.translate(x, y)
    allData.forEach((data, i) => {
        renderBoxLegendItemToCanvas(ctx, {
            data,
            x: itemCoordinates[i][0],
            y: itemCoordinates[i][1],
            width: itemWidth,
            height: itemHeight,
            direction: itemDirection,
            justify,
            textColor: itemTextColor,
            symbolSize,
            symbolSpacing,
            symbolShape: symbolShape as SymbolShapeCanvas,
            symbolBorderWidth,
            symbolBorderColor,
            theme,
        })
    })
    ctx.restore()
}