import { StyledTableFooter } from '.'

import TablePagination from './TablePagination'

export default function TableFooter() {
    return (
        <StyledTableFooter>
            <p>1–56 из 2,448 Предметы</p>
            <TablePagination
                count={11}
                defaultPage={6}
                siblingCount={1}
                boundaryCount={2}
            />
        </StyledTableFooter>
    )
}
