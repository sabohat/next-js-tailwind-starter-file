import styled from 'styled-components'
import Pagination from '@material-ui/lab/Pagination'

export const StyledTableHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    padding: 0 24px;
    & > div {
        display: flex;
        align-items: center;
        & > div {
            margin: 0;
            &:not(:nth-last-child(1)) {
                margin-right: 8px;
            }
        }
    }
`
export const StyledTableFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 24px 16px;
    border-top: 1px solid #ededed;
    & > p {
        font-size: 14px;
    }
`
export const StyledPagination = styled(Pagination)`
    ul {
        li {
            button {
                border-radius: 6px;
                border: 1px solid transparent;
                background-color: transparent;
                color: #252c32;
                &.Mui-selected {
                    background-color: transparent;
                    border: 1px solid #e5e9eb;
                    font-weight: 500;
                    color: ${({ theme }) => theme.palette.primary[600]};
                    &:hover {
                        background-color: transparent;
                    }
                }

                &:hover {
                    background-color: transparent;
                }
                span {
                    display: none;
                }
            }
        }
    }
`
