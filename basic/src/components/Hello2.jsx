import React from 'react'

function Hello2({name,age}) {
  return (
    <div>
        <p className='topic'>Deconstruter Props == Method 1</p>

        <p>Hello this is <span>{name}</span>  from Hello component age is <span>{age}</span></p>

    </div>
  )
}

export default Hello2