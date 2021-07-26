export const selectStyles = (props) => ({
    container: (styles) => ({
        ...styles,
        minWidth: 160,
        width: '100%',
    }),
    control: (styles, { isDisabled }) => ({
        ...styles,
        backgroundColor: isDisabled ? '#F6F8F9' : 'white',
        width: props?.inline ? 'auto' : '100%',
        minHeight: 40,
        borderRadius: 6,
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => ({
        ...styles,
        backgroundColor: isDisabled
            ? null
            : isSelected
            ? data.color
            : isFocused
            ? '#fff'
            : null,
        fontSize: '14px',
        lineHeight: '24px',
        color: isDisabled ? '#ccc' : '#000',
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        ':active': {
            color: isDisabled ? '#ccc' : isSelected ? '#0E73F6' : data.color,
            backgroundColor: !isDisabled && (isSelected ? data.color : '#eee'),
        },
    }),
    input: (styles) => ({
        ...styles,
        fontSize: '14px',
        lineHeight: '24px',
    }),
    placeholder: (styles) => ({
        ...styles,
        color: '#9AA6AC',
        fontSize: '14px',
        lineHeight: '24px',
    }),
    singleValue: (styles) => ({
        ...styles,
        fontSize: '14px',
        lineHeight: '24px',
    }),
    indicatorSeparator: () => ({
        display: 'none',
    }),
})
