
import { useState } from "react"

function Task1() {
    const [count, setCount] = useState(0)


    function Increment() {
        if (count < 10) {
            setCount(prev => prev + 1)
        }
    }

    function Decrement() {
        if (count > 0) {
            setCount(prev => prev - 1)
        }
    }

    function Reset() {
        setCount(prev => prev = 0)
    }



    return (
        <>

            <p className='topic'>Use State Count Task</p>

            <h1>Count : <span>{count}</span> </h1>

            <div className='btn'>
                <button onClick={Increment}>Increment </button>
                <button onClick={Decrement}>Decrement </button>
                <button onClick={Reset}>Reset </button>

            </div>
        </>
    )
}

export default Task1