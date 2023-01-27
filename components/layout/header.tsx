import React from 'react'
import Navbar from './navbar'

const Header: React.FC = () => {
  return (
    <div className='sticky top-0  z-10'>
      <Navbar />
    </div>
  )
}

export default Header