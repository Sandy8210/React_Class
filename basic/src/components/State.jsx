import React, { useState } from 'react'

function State() {

    const [count, setCount] = useState(0)

    const fiveIncrement = () => {
        for (let i = 0; i < 5; i++) {
            setCount(prev => prev + 1) //sync function

            // i=0 => 0 (prev value) + 1 = 1 (prev)
            // i=1 => 1 (prev value) + 1 = 2 (prev)
            // i=2 => 2 (prev value) + 1 = 3 (prev)
            // i=3 => 3 (prev value) + 1 = 4 (prev) 
            // i=4 => 4 (prev value) + 1 = 5 (last output) ==> setCount
        }
    }
    return (
        <>
            <p className='topic'>Use State Sync</p>

            <h1>Count : <span>{count}</span> </h1>

            <div className='btn'>


                <button onClick={fiveIncrement}>Increment 5</button>

            </div>

        </>
    )
}

export default State