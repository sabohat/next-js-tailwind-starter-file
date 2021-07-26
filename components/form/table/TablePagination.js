import React from 'react'
import { StyledPagination } from '.'

function TablePagination({ count, siblingCount, defaultPage, boundaryCount }) {
    return (
        <StyledPagination
            count={count}
            defaultPage={defaultPage}
            siblingCount={siblingCount}
            boundaryCount={boundaryCount}
        />
    )
}

export default TablePagination
