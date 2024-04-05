import React from 'react'

function Hello5({name,age,children}) {
  return (
    <div>

            <p className='topic'>Props Childran using props with passing parameter</p>

            <p>Hello this is <span>{name}</span>  from Hello component age is <span>{age}</span></p>

            {children}

        </div>
  )
}

export default Hello5