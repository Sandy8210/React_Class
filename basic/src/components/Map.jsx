import React from 'react'

const Map = () => {
    const users = [{ id: "1", name: "santhosh", email: "santhosh@gmail.com" }, { id: "2", name: "parthi", email: "parthi@gmail.com" }, { id: "3", name: "shiva", email: "shivaji@gmail.com" }]
    return (
        <>
            {
                users.map((user) => (
                    <div className='success' key={user.id}>
                        <h1>{user.name}</h1>
                        <p>{user.email}</p>

                    </div>
                ))
            }

        </>
    )
}

export default Map