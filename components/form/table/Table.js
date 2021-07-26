import React from 'react'
import styled from 'styled-components'
import { useTable } from 'react-table'
import TableHeader from './TableHeader'
import TableFooter from './TableFooter'
import { Link } from '../../../i18n'

const TableContainer = styled.div`
    table {
        border-spacing: 0;
        border: 1px solid #ededed;
        border-radius: 12px;
        overflow: hidden;
        margin: 24px;
        width: calc(100% - 48px);
        thead {
            background: #f9f9f9;
            font-weight: normal;
            th {
                font-weight: normal;
            }
        }
        tr {
            :last-child {
                td {
                    border-bottom: 0;
                }
            }
        }
        th,
        td {
            margin: 0;
            padding: 16px 10px;
            border-bottom: 1px solid #ededed;
            border-right: 1px solid #ededed;
            text-align: left;
            :last-child {
                border-right: 0;
            }
        }
    }
`

function Table({ columns, data }) {
    // Use the state and functions returned from useTable to build your UI
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({
            columns,
            data,
        })

    // Render the UI for your table
    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps()}>
                                {column.render('Header')}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => (
                                <td {...cell.getCellProps()}>
                                    {cell.render('Cell')}
                                </td>
                            ))}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

function App(props) {
    const columns = React.useMemo(
        () => [
            {
                Header: 'Номер заявления',
                accessor: 'application_num',
                Cell: ({ row }) => (
                    <Link
                        href={`/applications/${row.original.application_num}`}
                    >
                        <a style={{ color: '#0E73F6' }}>
                            {row.original.application_num}
                        </a>
                    </Link>
                ),
            },
            {
                Header: 'Кадастровый №',
                accessor: 'kadastr_num',
            },
            {
                Header: 'Дата подачи заявки',
                accessor: 'date_app',
            },
            {
                Header: 'Статус',
                accessor: 'status',
                Cell: ({ row }) => {
                    console.log(row.original.status)
                    return <>{row.original.status.text}</>
                },
            },
            {
                Header: 'Дата аукциона',
                accessor: 'date_auction',
            },
            {
                Header: 'Регион',
                accessor: 'region',
            },
            {
                Header: 'Адрес',
                accessor: 'address',
            },
        ],
        [],
    )

    const data = [
        {
            application_num: '15465',
            kadastr_num: '2132',
            date_app: '11.04.2021',
            status: {
                type: 'new',
                text: 'Новый',
            },
            region: 'Самарканд, Булунгур',
            date_auction: '12.05.2021',
            address: '3-й квартал, 21 3-й квартал, 21  ',
        },
        {
            application_num: '15466',
            kadastr_num: '2132',
            date_app: '11.04.2021',
            status: {
                type: 'new',
                text: 'Новый',
            },
            region: 'Самарканд, Булунгур',
            date_auction: '12.05.2021',
            address: '3-й квартал, 21 3-й квартал, 21  ',
        },
        {
            application_num: '15468',
            kadastr_num: '2132',
            date_app: '11.04.2021',
            status: {
                type: 'new',
                text: 'Новый',
            },
            region: 'Самарканд, Булунгур',
            date_auction: '12.05.2021',
            address: '3-й квартал, 21 3-й квартал, 21  ',
        },
        {
            application_num: '15469',
            kadastr_num: '2132',
            date_app: '11.04.2021',
            status: {
                type: 'new',
                text: 'Новый',
            },
            region: 'Самарканд, Булунгур',
            date_auction: '12.05.2021',
            address: '3-й квартал, 21 3-й квартал, 21  ',
        },
        {
            application_num: '15498',
            kadastr_num: '2132',
            date_app: '11.04.2021',
            status: {
                type: 'new',
                text: 'Новый',
            },
            region: 'Самарканд, Булунгур',
            date_auction: '12.05.2021',
            address: '3-й квартал, 21 3-й квартал, 21  ',
        },
        {
            application_num: '15548',
            kadastr_num: '2132',
            date_app: '11.04.2021',
            status: {
                type: 'new',
                text: 'Новый',
            },
            region: 'Самарканд, Булунгур',
            date_auction: '12.05.2021',
            address: '3-й квартал, 21 3-й квартал, 21  ',
        },
    ]

    return (
        <TableContainer {...props}>
            <TableHeader />
            <Table columns={columns} data={data} />
            <TableFooter />
        </TableContainer>
    )
}

export default App
