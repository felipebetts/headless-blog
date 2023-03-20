import React from 'react'
import NextLink from 'next/link'

import classNames from '@/utils/classnames'


interface Props {
    children: React.ReactNode
    href: string
    className?: string
}

const Link: React.FC<Props> = ({ children, href, className }) => {
  return (
    <NextLink
      href={href}
      className={classNames(`font-medium text-indigo-500 hover:text-indigo-700`, className ? className : '')}
    >
        { children }
    </NextLink>
  )
}

interface OutProps {
  children: React.ReactNode
  href: string
}

export const OutLink: React.FC<OutProps> = ({ href, children }) => (
  <a target='_blank' rel='noreferrer' href={href}>
    {children}
  </a>
)

interface TagProps {
  children: React.ReactNode
  href: string
  px?: number,
}

export const TagLink: React.FC<TagProps> = ({ px = 3, href, children }) => (
  <Link href={href} className={`px-${px} py-2 text-sm`}>
    { children }
  </Link>
)

export default Link