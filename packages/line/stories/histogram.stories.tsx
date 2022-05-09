import { Component, useState, useEffect } from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean, select } from '@storybook/addon-knobs'
import { generateDrinkStats } from '@nivo/generators'
import { Defs, linearGradientDef } from '@nivo/core'
import { area, curveMonotoneX } from 'd3-shape'
import * as time from 'd3-time'
import { Histogram } from '../src'
import { range } from 'lodash'

//const data = generateDrinkStats(5)
//console.log(JSON.stringify(data))

type DistributionConfig = {
    id: string
    n: number
    mu?: number
    scale?: number
}

// create a random number from a distribution that has a mean and some spread
// (uses Math.atanh instead of normal distribution - only meant for test cases)
const randomATanhValue = (mu = 0, scale = 1) => {
    let z = (Math.random() - 0.5) * 2
    return Math.atanh(z) * scale + mu
}
// generate several values from uniform and atanh distributions, the filter them
const generateATanhDistribution = (config: DistributionConfig, filter: (x: number) => boolean) => {
    let data = Array(config.n)
        .fill(0)
        .map(() => randomATanhValue(config.mu, config.scale))
        .filter(filter)
        .map(v => Number(v.toPrecision(4)))
    return { id: config.id, data }
}
const generateUniformDistribution = (
    config: DistributionConfig,
    filter: (x: number) => boolean
) => {
    let data = Array(config.n)
        .fill(0)
        .map(() => Math.random())
        .filter(filter)
        .map(v => Number(v.toPrecision(4)))
    return { id: config.id, data }
}

const dataOneSided = [
    generateATanhDistribution({ id: 'A', mu: 0, scale: 2, n: 60 }, x => x >= 0 && x <= 1),
]
const dataTwoBellShapes = [
    generateATanhDistribution({ id: 'A', mu: 8, scale: 1, n: 30 }, x => true),
    generateATanhDistribution({ id: 'B', mu: 12, scale: 2, n: 30 }, x => true),
]
const dataUniform = [generateUniformDistribution({ id: 'flat', n: 60 }, x => true)]

//console.log(JSON.stringify(dataOneSided))
//console.log(JSON.stringify(dataTwoBellShapes))

const commonProperties = {
    width: 800,
    height: 360,
    margin: { top: 40, right: 20, bottom: 60, left: 80 },
    animate: true,
    enableSlices: 'x',
}

const curveOptions = ['step', 'monotone']
const densityOptions = [true, false]
const epsilon = 1e-6

const stories = storiesOf('Histogram', module)

stories.addDecorator(withKnobs)

const CustomPointController = ({ values, setValues, randomValue }) => {
    const reset = () => {
        setValues([])
    }
    const addOnePoint = () => {
        setValues(values.concat([randomValue()]))
    }
    const addManyPoints = n => {
        const points = Array(n)
            .fill(0)
            .map(() => randomValue())
        setValues(values.concat(points))
    }
    const CustomButton = ({ onClick, children }) => (
        <button style={{ cursor: 'pointer', marginRight: '10px' }} onClick={onClick}>
            {children}
        </button>
    )

    return (
        <>
            <CustomButton onClick={reset}>Reset dataset</CustomButton>
            <CustomButton onClick={addOnePoint}>Add 1 point</CustomButton>
            <CustomButton
                onClick={() => {
                    addManyPoints(10)
                }}
            >
                Add 10 points
            </CustomButton>
            <CustomButton
                onClick={() => {
                    addManyPoints(100)
                }}
            >
                Add 100 points
            </CustomButton>
        </>
    )
}

stories.add('Uniform distribution', () => {
    const [values, setValues] = useState([])
    const breaks10 = range(0, 1 + epsilon, 0.1)
    const breaks20 = range(0, 1 + epsilon, 0.05)
    let selectedBreaks = select('bins', [10, 20], 10)
    return (
        <>
            <CustomPointController
                values={values}
                setValues={setValues}
                randomValue={() => Math.random()}
            />
            <Histogram
                {...commonProperties}
                data={[
                    {
                        id: 'A',
                        data: values,
                    },
                ]}
                curve={select('curve', curveOptions, 'step')}
                breaks={selectedBreaks === 10 ? breaks10 : breaks20}
                density={select('density', densityOptions, false)}
                enableArea={true}
                axisBottom={{
                    ticks: breaks10,
                    tickPosition: breaks10,
                }}
            />
        </>
    )
})

stories.add('Bell-shaped distribution', () => {
    const [values, setValues] = useState([])
    const breaks = range(-5.25, 5.25 + epsilon, 0.5)
    return (
        <>
            <CustomPointController
                values={values}
                setValues={setValues}
                randomValue={() => randomATanhValue()}
            />
            <Histogram
                {...commonProperties}
                data={[
                    {
                        id: 'A',
                        data: values,
                    },
                ]}
                curve={select('curve', curveOptions, 'step')}
                breaks={breaks}
                density={select('density', densityOptions, false)}
                enableArea={true}
                axisBottom={{
                    min: 'auto',
                    max: 'auto',
                }}
            />
        </>
    )
})

const valuesA = Array(200)
    .fill(0)
    .map(() => randomATanhValue(-1.75, 1))
const valuesB = Array(200)
    .fill(0)
    .map(() => randomATanhValue(1.75, 1))
stories.add('Two distributions', () => {
    const breaks = range(-5.25, 5.25 + epsilon, 0.5)
    return (
        <>
            <Histogram
                {...commonProperties}
                data={[
                    {
                        id: 'A',
                        data: valuesA,
                    },
                    {
                        id: 'B',
                        data: valuesB,
                    },
                ]}
                curve={select('curve', curveOptions, 'monotone')}
                breaks={breaks}
                density={select('density', densityOptions, false)}
                enableArea={true}
            />
        </>
    )
})


stories.add('Themed', () => {
    const breaks = range(-5.25, 5.25 + epsilon, 0.5)
    return (
        <>
            <Histogram
                {...commonProperties}
                data={[
                    {
                        id: 'A',
                        data: valuesA,
                    },
                    {
                        id: 'B',
                        data: valuesB,
                    },
                ]}
                curve={select('curve', curveOptions, 'monotone')}
                breaks={breaks}
                density={true}
                enableArea={true}
                theme={{
                    "fontSize": "7pt",
                }}
            />
        </>
    )
})
