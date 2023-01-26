import React from 'react'
import NextLink from 'next/link'


interface Props {
    children: React.ReactNode
    href: string
}

const Link: React.FC<Props> = ({ children, href }) => {
  return (
    <NextLink
      href={href}
      className='px-3 py-2 text-sm font-medium text-indigo-500 hover:text-indigo-700'
    >
        { children }
    </NextLink>
  )
}

export default Link