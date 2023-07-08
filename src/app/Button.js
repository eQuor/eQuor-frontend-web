import React from 'react'

const Button = (props) => {
  return (
    <button
      className="bg-black text-white  font-medium py-2 px-6 rounded md:ml-8 hover:bg-gray-900 
    duration-500"
    >
      {props.children}
    </button>
  )
}

export default Button
