import React from 'react'

function Hello4(props) {
    return (
        <div>

            <p className='topic'>Props Childran using props without passing parameter</p>

            <p>Hello this is <span>{props.name}</span>  from Hello component age is <span>{props.age}</span></p>

            {props.children}

        </div>
    )
}

export default Hello4