import React from 'react'
import { StyledButton } from '.'

function Button({ children, adornment, ...rest }) {
    const adornmentStyle = {
        height: '100%',
        display: 'inline-flex',
        color: 'white',
        alignItems: 'center',
        marginRight: 6,
    }
    return (
        <StyledButton {...rest}>
            {adornment ? <span style={adornmentStyle}>{adornment}</span> : ''}
            {children}
        </StyledButton>
    )
}

export default Button
