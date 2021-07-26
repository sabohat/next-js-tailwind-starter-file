import styled from 'styled-components'

export const StyledButton = styled.button`
    outline: 0;
    border: 0;
    height: ${({ small, middle, large }) =>
        small ? 36 : middle ? 40 : large ? 48 : 40}px;
    padding: 0
        ${({ small, middle, large }) =>
            small ? 8 : middle ? 12 : large ? 26 : 8}px;
    font-style: normal;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: ${({ small, middle, large }) =>
        small ? 14 : middle ? 14 : large ? 20 : 14}px;
    line-height: 24px;
    border-radius: 6px;
    min-width: 160px;
    border: 1px solid
        ${({ secondary, primary, theme, noBorder }) =>
            !secondary
                ? primary
                    ? theme.palette.primary[600]
                    : noBorder
                    ? 'transparent'
                    : theme.palette.primary[600]
                : '#f5f5f5'};
    color: ${({ secondary, primary, theme }) =>
        !secondary
            ? primary
                ? '#fff'
                : theme.palette.primary[600]
            : '#acacac'};
    background: ${({ secondary, theme, primary }) =>
        !secondary
            ? primary
                ? theme.palette.primary[600]
                : '#fff'
            : '#f5f5f5'};
`
