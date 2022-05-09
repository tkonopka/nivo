import { useMemo } from 'react'
import Line from './Line'
import { LineDefaultProps } from './props'
import { sortedIndex } from 'lodash'

const HistogramDefaultProps = {
    ...LineDefaultProps,
    xScale: {
        type: 'linear',
        min: 'auto',
        max: 'auto',
    },
    yScale: {
        type: 'linear',
        min: 0,
        max: 'auto',
    },
}

const formatBinnedData = (values, breaks) => {
    const n = breaks.length
    const result = Array(n + 1).fill({})
    result[0] = { x: breaks[0], y: values[0] }
    result[n] = { x: breaks[n - 1], y: values[n - 2] }
    values.forEach((count, i) => {
        result[i + 1] = {
            x: (breaks[i + 1] + breaks[i]) / 2.0,
            y: count,
        }
    })
    return result
}

const binValues = (data, breaks, density) => {
    const values = Array(breaks.length - 1).fill(0)
    if (data.length == 0) {
        return formatBinnedData(values, breaks)
    }
    const first = data[0]
    if (typeof first !== 'number') return data
    const min = breaks[0]
    const max = breaks[breaks.length - 1]
    data.filter(v => v >= min && v < max).forEach(v => {
        const index = sortedIndex(breaks, v)
        values[index - 1] += 1
    })
    if (density) {
        const total = values.reduce((acc, v) => acc + v, 0)
        values.forEach((v, i) => {
            const width = breaks[i + 1] - breaks[i]
            values[i] = v / (width * total)
        })
    }
    return formatBinnedData(values, breaks)
}

export const Histogram = ({
    data,
    breaks,
    density = false,
    xScale = HistogramDefaultProps.xScale,
    yScale = HistogramDefaultProps.yScale,
    curve = 'step',
    ...props
}) => {
    const binnedData = useMemo(
        () =>
            data.map(seriesData => ({
                ...seriesData,
                data: binValues(seriesData.data, breaks, density),
            })),
        [data, breaks, density]
    )
    const maxValue = binnedData
        .map(serieData => serieData.data.reduce((acc, d) => Math.max(acc, d.y), 0))
        .reduce((acc, v) => Math.max(acc, v), 0)
    const lastBreak = breaks[breaks.length - 1]
    return (
        <Line
            data={binnedData}
            xScale={xScale}
            yScale={yScale}
            curve={curve === 'monotone' ? 'monotoneX' : 'step'}
            enablePoints={false}
            useMesh={true}
            enableSlices={false}
            {...props}
            xScale={{
                ...xScale,
                min: xScale.min === 'auto' ? breaks[0] : Math.max(breaks[0], xScale.min),
                max: xScale.max === 'auto' ? lastBreak : Math.min(lastBreak * 1.001, xScale.max),
            }}
            yScale={{
                ...yScale,
                min: 0,
                max: yScale.max === 'auto' ? (maxValue === 0 ? 1 : maxValue) : yScale.max,
            }}
            enableCrosshair={false}
        />
    )
}
