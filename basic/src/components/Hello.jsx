import React from 'react'


function Hello(props) {
    return (
        <div>
            <p className='topic'> Props </p>
            <p>Hello this is <span>{props.name}</span>  from Hello component age is <span>{props.age}</span></p>
        </div>
    )
}

export default Hello