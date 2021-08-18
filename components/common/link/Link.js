import React from 'react'
import { Link as I18nLink } from 'i18n'

function Link({ children, ...rest }) {
    return <I18nLink {...rest}>{children}</I18nLink>
}

export default Link
