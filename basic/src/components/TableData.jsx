import React from 'react'

const TableData = (props) => {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.email}</td>
        </tr>
    )
}

export default TableData