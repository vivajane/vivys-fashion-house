import React from 'react'

const Button = ({children, variant}) => {
  return <button className='btn' variant = {variant}>{children}</button>
}

export default Button
