import React from 'react'
import Select, { components } from 'react-select'
import { InputContainer, InputLabel, InvisibleInput } from '..'
import { selectStyles } from './styles'

const Control = ({ children, ...props }) => {
    const { adornment } = props.selectProps
    const style = {
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 8,
    }

    return (
        <components.Control {...props}>
            {adornment ? <span style={style}>{adornment}</span> : ''}
            {children}
        </components.Control>
    )
}

export default function SelectMenu({
    label,
    placeholder,
    options,
    adornment,
    value,
    required,
    ...rest
}) {
    const styles = selectStyles()
    return (
        <InputContainer>
            <InputLabel>{label}</InputLabel>
            <Select
                options={options || []}
                adornment={adornment}
                components={{ Control }}
                placeholder={placeholder}
                styles={styles}
                getOptionLabel={(option) => option.name}
                value={value}
                noOptionsMessage={() => 'Нет варианта'}
                {...rest}
            />
            <InvisibleInput required={required} value={value} />
        </InputContainer>
    )
}
