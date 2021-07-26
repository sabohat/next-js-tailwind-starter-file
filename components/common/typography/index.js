import styled from 'styled-components'

export const Title = styled.h1`
    font-weight: ${(props) => props.fontWeight || 600};
    font-size: ${(props) => (props.main ? 64 : props.fontSize || 36)}px;
    line-height: ${(props) => props.lineHeight || 1.25};
    text-align: ${(props) => (props.left ? 'left' : 'center')};
    color: ${(props) =>
        props.color
            ? props.color
            : props.white
            ? props.theme.palette.white
            : '#000'};
    max-width: ${(props) => props.maxWidth || '100%'};
    margin: ${(props) =>
        props.section
            ? '64px auto 48px'
            : props.my
            ? `${props.my} auto`
            : props.mt || props.mb
            ? props.mt || `${0} auto ${props.mt}` || 0
            : '0'};
`
export const Leading = styled.p`
    font-weight: ${(props) => props.fontWeight || 400};
    font-size: ${(props) => props.fontSize || 20}px;
    line-height: ${(props) => props.lineHeight || 1.25};
    text-align: ${(props) => (props.centered ? 'center' : 'left')};
    color: ${(props) =>
        props.color
            ? props.color
            : props.white
            ? props.theme.palette.white
            : '#000'};
    max-width: ${(props) => props.maxWidth || '460px'};
    margin: ${(props) =>
        props.my
            ? `${props.my} 0`
            : props.mt || props.mb
            ? `${props.mt || 0}px  0 ${props.mb || 0}px`
            : '0'};
`
