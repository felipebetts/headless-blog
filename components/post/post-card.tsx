import React from 'react'
import {TagLink} from '../common/link'
import NextLink from 'next/link'
import { formatDate } from '@/utils/format'
import Image from 'next/image'
import classNames from '@/utils/classnames'
import s from '@/styles/post-card.module.css'

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
            <div className={classNames("h-72 w-full relative overflow-hidden rounded-md bg-black/30 dark:bg-none hover:shadow-xl transition-shadow duration-300", s.thumbnail_container)}>
                <Image 
                    src={thumbnailUrl}
                    alt='slug'
                    fill
                    className='object-cover'
                />
            </div>
        </NextLink>
        <div className="flex items-center text-xs text-slate-400 py-2">
            {tags && (
                <>
                    {tags.map((tag, i) => i === tags.length - 1 ? (
                        <div className='pr-2' key={`${slug}_${tag}`}>
                            <TagLink href={`/categorias/${tag}`} px={0}>
                                { tag }
                            </TagLink>
                        </div>
                    ) : (
                        <div className='pr-2' key={`${slug}_${tag}`}>
                            <TagLink href={`/categorias/${tag}`} px={0}>
                                { tag }
                            </TagLink>
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