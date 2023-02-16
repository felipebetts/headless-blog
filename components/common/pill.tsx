import React from 'react'

interface Props {
    children: React.ReactNode,
    className?: string
}

const Pill: React.FC<Props> = ({ children, className }) => {
  return (
    <span
        className={`${className && className} bg-indigo-700 text-white px-4 py-1 rounded-xl text-center`}
    >
        { children }
    </span>
  )
}

export default Pill