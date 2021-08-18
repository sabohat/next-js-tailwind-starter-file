import React from 'react'
import { ReactSVG } from 'react-svg'
import styled, { css } from 'styled-components'

const StyledSVGIcon = styled(ReactSVG)`
    div {
        display: flex;
        align-items: center;
        justify-items: center;
    }
    svg {
        fill: black;
        ${({ width, height, opacity }) =>
            width
                ? css`
                      width: ${width}px;
                  `
                : height
                ? css`
                      height: ${width}px;
                  `
                : opacity
                ? css`
                      opacity: ${opacity};
                  `
                : ''}
        ${({ transform }) =>
            transform &&
            css`
                transform: ${transform};
            `}
    path {
            ${({ color }) =>
                color &&
                css`
                    fill: ${color};
                `}
        }
    }
`

const Icon = ({ name, color, width, height, transform, opacity }) => (
    <StyledSVGIcon
        src={`/vectors/${name}.svg`}
        color={color}
        height={height}
        width={width}
        opacity={opacity}
        transform={transform}
    />
)

export default Icon
