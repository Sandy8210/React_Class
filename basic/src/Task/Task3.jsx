import React, { useState } from 'react'

function Task3() {

    const [select1, setSelect1] = useState("")

    const [select2, setSelect2] = useState("")

    const [input1, setInput1] = useState(1)

    const [input2, setInput2] = useState(1)

    let values = {
        'inr to inr': 1,
        'inr to usd': 0.012,
        'usd to usd': 1,
    }

    const select1Function = (e) => {
        setSelect1(e.target.value)
    }

    const select2Function = (e) => {
        setSelect2(e.target.value)
    }

    const getInput1 = (e) => {
        setInput1(e.target.value)
        setInput2(e.target.value * values(`${select1} to ${select2}`))
    }

    const getInput2 = (e) => {
        setInput2(e.target.value)
        setInput1(e.target.value / values(`${select1} to ${select2}`))
    }

    return (
        <>
            <select onChange={select1Function}>
                <option value="inr">INR</option>
                <option value="usd">USD</option>
                <option value="aed">AED</option>

            </select>
            <input type='number' onChange={getInput1} value={input1} /> <br /> <br />

            <p><span> {input1}</span> {select1}</p>

            <select onChange={select2Function}>
                <option value="inr">INR</option>
                <option value="usd">USD</option>
                <option value="aed">AED</option>

            </select>
            <input type='number' onChange={getInput2} value={input2} />

            <p> <span> {input2}</span> {select2}</p>

        </>
    )
}

export default Task3