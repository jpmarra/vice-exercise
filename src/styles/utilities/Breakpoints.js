import { css } from "styled-components"

const size = {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
}

export const above = Object.keys(size).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (min-width: ${size[label] / 16}em) {
            ${css(...args)}
        }
    `
    return acc
}, {})

export const below = Object.keys(size).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (max-width: ${size[label] / 16}em) {
            ${css(...args)}
        }
    `
    return acc
}, {})
