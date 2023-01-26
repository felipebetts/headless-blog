import React from 'react'
import Head from 'next/head'

import Footer from './footer'
import Header from './header'
import BackToTopButton from '../common/button/back-to-top'


interface Props {
    children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div
        className='min-h-screen flex flex-col justify-between'
    >
        <div>
            <Header />
            { children }
        </div>
        <BackToTopButton />
        <Footer />
    </div>
  )
}

export default Layout