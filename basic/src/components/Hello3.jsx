import React from 'react'

function Hello3(props) {

    const {name , age}  = props

  return (
    <div>

    <p className='topic'>Deconstruter Props == Method 2</p>

    <p>Hello this is <span>{name}</span>  from Hello component age is <span>{age}</span></p>

</div>
  )
}

export default Hello3