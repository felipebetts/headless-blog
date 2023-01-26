import React from 'react'
import NextHead from 'next/head'

interface Props {
    description: string
    title: string
    children?: React.ReactNode
}

const Head: React.FC<Props> = ({
    description,
    title,
    children
}) => {
  return (
    <NextHead>
        <title>{ title }</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        { children && children }
    </NextHead>
  )
}

export default Head