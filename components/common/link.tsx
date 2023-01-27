import React from 'react'
import NextLink from 'next/link'


interface Props {
    children: React.ReactNode
    href: string
    px?: number
}

const Link: React.FC<Props> = ({ children, href, px = 3 }) => {
  return (
    <NextLink
      href={href}
      className={`px-${px} py-2 text-sm font-medium text-indigo-500 hover:text-indigo-700`}
    >
        { children }
    </NextLink>
  )
}

export default Link