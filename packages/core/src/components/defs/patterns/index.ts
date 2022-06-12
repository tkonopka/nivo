/*
 * This file is part of the nivo project.
 *
 * Copyright 2016-present, Raphaël Benitte.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import { PatternDots } from './PatternDots'
import { PatternLines } from './PatternLines'
import { PatternSquares } from './PatternSquares'

export const linePatternTypes = {
    patternLines: PatternLines,
}
export const dotPatternTypes = {
    patternDots: PatternDots,
    patternSquares: PatternSquares,
}

export * from './PatternDots'
export * from './PatternLines'
export * from './PatternSquares'
export * from './types'
export * from './props'
