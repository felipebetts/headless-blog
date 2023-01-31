import React from 'react'
import Link from '../common/link'
import NextLink from 'next/link'
import classNames from '@/utils/classnames'
import HeroImage from './hero-image'
import { formatDate } from '@/utils/format'

interface Props {
    date: string
    slug: string
    tags?: Array<string>
    title: string
    thumbnailUrl: string
    minutesToRead: number
}

const PostCard: React.FC<Props> = ({
    date,
    slug,
    tags,
    title,
    thumbnailUrl,
    minutesToRead,
}) => {
  return (
    <div className="w-full h-full">
        <NextLink href={`/posts/${slug}`}>
            <div
                style={{ backgroundImage: `url('${thumbnailUrl}')`}}
                className={`bg-cover bg-center h-72`}
            />
        </NextLink>
        <div className="flex items-center text-xs text-slate-400 py-2">
            {tags && (
                <>
                    {tags.map((tag, i) => i === tags.length - 1 ? (
                        <div className='pr-2' key={`${slug}_${tag}`}>
                            <Link href={`/categorias/${tag}`} px={0}>
                                { tag }
                            </Link>
                        </div>
                    ) : (
                        <div className='pr-2' key={`${slug}_${tag}`}>
                            <Link href={`/categorias/${tag}`} px={0}>
                                { tag }
                            </Link>
                        </div>
                    ))}
                    <span className='pr-2'> • </span>
                </>
            )}
            {minutesToRead && (
                <div className="flex items-center text-slate-500 dark:text-slate-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className='ml-1'>
                    {minutesToRead} minuto{minutesToRead > 1 ? 's' : ''} de leitura
                </span>
                </div>
            )}
        </div>
        <NextLink href={`/posts/${slug}`}>
            <h4 className='text-lg hover:text-indigo-700 transition-all duration-150 font-medium'>
                {title}
            </h4>
        </NextLink>
        <div className="flex w-full">
            <p className='text-slate-500 dark:text-slate-300 text-sm pt-4'>
                { formatDate(date) }
            </p>
        </div>
    </div>
  )
}

export default PostCard