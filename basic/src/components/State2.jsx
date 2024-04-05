import React, { useState } from 'react'


function State2() {

    const [count, setCount] = useState(0)

    const increment = () => {
        for (let i = 0; i < 5; i++) {

            console.log("clicked");
            setCount(count + 1) //Async function

            // i=0 => 0 (count value) + 1 = 1
            // i=1 => 0 (count value) + 1 = 1
            // i=2 => 0 (count value) + 1 = 1
            // i=3 => 0 (count value) + 1 = 1 
            // i=4 => 0 (count value) + 1 = 1 (last output) ==> setCount
        }
    }
    return (
        <>
            <p className='topic'>Use State ASync</p>

            <h1>Count : <span>{count}</span> </h1>

            <div className='btn'>

                <button onClick={increment}>Increment </button>

            </div>
        </>
    )
}

export default State2