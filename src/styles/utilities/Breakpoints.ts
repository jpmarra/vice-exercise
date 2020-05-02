import { css, FlattenSimpleInterpolation } from "styled-components"

const size: { [k: string]: number } = {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
}
type BPMethods = {
    [k: string]: (cssVal: TemplateStringsArray) => FlattenSimpleInterpolation
}

export const above: BPMethods = Object.keys(size).reduce(
    (acc: BPMethods, label) => {
        acc[label] = (cssVal) => css`
            @media (min-width: ${size[label] / 16}em) {
                ${css(cssVal)}
            }
        `
        return acc
    },
    {}
)

export const below: BPMethods = Object.keys(size).reduce(
    (acc: BPMethods, label) => {
        acc[label] = (cssVal) => css`
            @media (max-width: ${size[label] / 16}em) {
                ${css(cssVal)}
            }
        `
        return acc
    },
    {}
)
