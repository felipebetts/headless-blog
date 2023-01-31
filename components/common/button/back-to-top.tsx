import React, { useCallback, useContext, useEffect, useState } from 'react'
import NextLink from 'next/link'
import { ScrollContext } from '@/utils/scroll-observer'
import useWindowDimensions from '@/hooks/use-window-dimensions'
import classNames from '@/utils/classnames'

const BackToTopButton = () => {

  const [show, setShow] = useState(false)
  const { scrollY } = useContext(ScrollContext)
  const { height } = useWindowDimensions()

  const handleShowButton = useCallback(() => {
    if (scrollY > height) {
      setShow(true)
    } else {
      setShow(false)
    }
  }, [height, scrollY])

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    handleShowButton()
  }, [scrollY, height, handleShowButton])

  return (
      <button
        className={classNames(
          'fixed bottom-6 right-6 rounded-md bg-slate-300 dark:bg-slate-600 hover:bg-slate-200 dark:hover:bg-slate-700 w-8 h-8 flex justify-center items-center drop-shadow-md hover:drop-shadow-none transition-all duration-100',
          show ? 'block' : 'hidden'
        )}
        onClick={handleScrollTop}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z" clipRule="evenodd" />
        </svg>
      </button>
  )
}

export default BackToTopButton