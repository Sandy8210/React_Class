import React, { useState } from 'react'
import "../ModuleCss/Task4.module.css"

function Task4() {

    const [input, setInput] = useState("")

    const handleClick = (calcValue) => {
        if (calcValue === "=") {
            setInput(eval(input))
        }
        else if (calcValue === "CLR") {
            setInput("")
        }
        else {
            setInput(input + calcValue)
        }
    }
    return (
        <>
            <input type='text' value={input} />

            <br /><br />

            <input type='button' value="1" onClick={() => handleClick("1")} />
            <input type="button" value="2" onClick={() => handleClick("2")} />
            <input type="button" value="3" onClick={() => handleClick("3")} />
            <input type="button" value="4" onClick={() => handleClick("4")} />
            <input type="button" value="+" onClick={() => handleClick("+")} />
            <br /> <br />

            <input type="button" value="5" onClick={() => handleClick("5")} />
            <input type="button" value="6" onClick={() => handleClick("6")} />
            <input type="button" value="7" onClick={() => handleClick("7")} />
            <input type="button" value="8" onClick={() => handleClick("8")} />
            <input type="button" value="-" onClick={() => handleClick("-")} />
            <br /> <br />

            <input type="button" value="9" onClick={() => handleClick("9")} />
            <input type="button" value="0" onClick={() => handleClick("0")} />
            <input type="button" value="*" onClick={() => handleClick("*")} />
            <input type="button" value="/" onClick={() => handleClick("/")} />
            <input type="button" value="=" onClick={() => handleClick("=")} />
            <br /> <br />


            <input type="button" value="CLR" className='clrBtn' onClick={() => handleClick("CLR")} />





        </>
    )
}

export default Task4