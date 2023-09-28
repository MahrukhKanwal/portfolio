import React from 'react'

const Button = (props) => {
  return (
    <div className='btn-success btn' >
        <div className=''>
        <span className='text-white'>
            {props.title}

        </span>

        </div>
    </div>
  )
}

export default Button
