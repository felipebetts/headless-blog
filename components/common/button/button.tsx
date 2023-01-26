import React from 'react'

interface Props {
    children: React.ReactNode
}

const Button: React.FC<Props> = ({ children }) => {
  return (
    <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition-all duration-100">
        { children }
    </button>
  )
}

export default Button