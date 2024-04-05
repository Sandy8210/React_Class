import React from 'react'
import MethodProps2 from './MethodProps2'

function MethodProps(props) {

    function names(a) {

        console.log(a + "1");

    }
    return (
        <>
            <p className='topic'>Method Props Parent Component</p>

            <MethodProps2 fn={names} />

        </>
    )
}

export default MethodProps