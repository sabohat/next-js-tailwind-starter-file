import React from 'react'
import { InputContainer, StyledInput, InputLabel } from '../index'

function TextInput({ label, placeholder, type = 'text', id, ...rest }) {
    return (
        <InputContainer>
            {label ? <InputLabel htmlFor={id}>{label}</InputLabel> : ''}
            <StyledInput
                {...rest}
                id={id}
                placeholder={placeholder}
                type={type}
            />
        </InputContainer>
    )
}

export default TextInput
