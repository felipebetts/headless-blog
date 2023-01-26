import React from 'react'
import NextLink from 'next/link'

const BackToTopButton = () => {
  return (
      <NextLink href="#" className='fixed bottom-6 right-6 rounded-md bg-slate-300 hover:bg-slate-200 w-8 h-8 flex justify-center items-center drop-shadow-md hover:drop-shadow-none transition-all duration-100'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z" clipRule="evenodd" />
        </svg>
      </NextLink>
  )
}

export default BackToTopButton