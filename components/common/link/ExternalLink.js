import React from 'react'

function ExternalLink({ children, ...rest }) {
    return (
        <a rel="nofollow noreferrer" target="_blank" {...rest}>
            {children}
        </a>
    )
}

export default ExternalLink
