import React from 'react'
import TableData from './TableData'

const TableRow = () => {
    const users = [{ id: "1", name: "santhosh", email: "santhosh@gmail.com" }, { id: "2", name: "parthi", email: "parthi@gmail.com" }, { id: "3", name: "shiva", email: "shivaji@gmail.com" }]
    return (
        <>
            <table border={"2"} style={{ width: "100%", textAlign: "center" }} className='success'>
                <thead>
                    <tr>
                        <td>NAME</td>
                        <td>id</td>
                        <td>EMAIL</td>
                    </tr>
                </thead>
                <tbody>

                {
                    users.map((user) => (
                        // <TableData key={user.id} name={user.name} email={user.email} />
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.id} </td>
                            <td>{user.email}</td>
                        </tr>

                    ))
                }
                </tbody>
            </table>
        </>
    )
}

export default TableRow