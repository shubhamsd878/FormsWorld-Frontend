import React from 'react'

 const TableRow = (props) => {
    const {title, last_date, total_post, price, qualification, age} = props

    return (
        <>
        <tr>
            <td>{props.title}</td>
            <td>{last_date}</td>
            <td>{total_post}</td>
            <td>{age}</td>
            <td>{qualification}</td>
            <td>{price}</td>
        </tr>
        </>
    )
}
export default TableRow