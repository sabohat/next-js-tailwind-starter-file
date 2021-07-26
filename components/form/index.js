import styled from 'styled-components'

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 24px;
    position: relative;
`
export const InputLabel = styled.label`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: -0.006em;
    color: #252c32;
    margin-bottom: 4px;
`
export const InvisibleInput = styled.input`
    height: 0;
    width: 0;
    opacity: 0;
    position: absolute;
    left: ${({ map }) => (map ? '24px' : '50%')};
    bottom: 0;
`
export const StyledInput = styled.input`
    height: 40px;
    padding: 8px 12px;
    border: 1px solid #e5e9eb;
    border-radius: 6px;
    background: #fff;
    outline: 0;
    margin: 0;
    width: 100%;
    &::placeholder {
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 24px;
        letter-spacing: -0.006em;
        color: ${({ theme }) => theme.palette.grey.medium};
    }
`
export const StyledSelect = styled.select`
    height: 40px;
    padding: 8px 12px;
    border: 1px solid #e5e9eb;
    border-radius: 6px;
    background: #fff;
    outline: 0;
    margin: 0;
    color: ${({ theme }) => theme.palette.grey.medium};
    width: 100%;
    &::placeholder {
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 24px;
        letter-spacing: -0.006em;
        color: ${({ theme }) => theme.palette.grey.medium};
    }
`
export const StyledSelectOption = styled.option`
    padding: 16px;
    &:not(:first-of-type) {
        color: black;
    }
    &:first-of-type {
        display: none;
    }
`
export const StyledMap = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const StyledMapInner = styled.button`
    display: flex;
    align-items: center;
    background: transparent;
    color: ${({ theme }) => theme.palette.primary[600]};
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    height: 40px;
    padding: 4px;
    outline: 0;
    border: 0;
    & > svg {
        margin-right: 12px;
    }
`
