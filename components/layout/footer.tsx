import React from 'react'
import NextLink from 'next/link'
import { navigation } from '@/utils/contants'
import useTags from '@/hooks/use-tags'

const Footer = () => {

  const { navigationTags } = useTags()

  return (
    <footer
        className='min-w-screen bg-indigo-700 text-white h-64 py-4'
    >
      <div className="mx-auto max-w-6xl px-2 sm:px-6 lg:px-8 text-xl font-medium h-full flex flex-col flex-wrap">
        {navigationTags && navigationTags.map(el => (
          <NextLink 
            href={el.href}
            key={el.href}
            className="p-2 hover:underline"
          >
            { el.name }
          </NextLink>
        ))}
      </div>
    </footer>
  )
}

export default Footer