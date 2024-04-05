import React, { useState } from 'react'

function Task2() {
    const [toggle, setToggle] = useState(false);

    function ToggleBtn() {
        setToggle(!toggle)
    }

    return (
        <>
            <p className='topic'>Toggle Task</p>

            <h1> <span>{toggle ? "ON" : "OFF"}</span></h1>

            <div className='btn'>
                <button onClick={ToggleBtn}>Toggle</button>
            </div>
        </>
        
    )
}

export default Task2