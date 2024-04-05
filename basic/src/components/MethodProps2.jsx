import React from 'react'

function MethodProps2(props) {
    return (
        <>

            <div className='btn'>

                <button onClick={() => props.fn("sandy")}>Click here</button>

            </div>
        </>
    )
}

export default MethodProps2