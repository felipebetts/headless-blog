import React from 'react'
import Link from '../common/link'
import NextLink from 'next/link'
import classNames from '@/utils/classnames'
import HeroImage from './hero-image'

interface Props {
    date: string
    slug: string
    tags?: Array<string>
    title: string
    thumbnailUrl: string
}

const PostCard: React.FC<Props> = ({
    date,
    slug,
    tags,
    title,
    thumbnailUrl
}) => {
  return (
    <div className="w-full h-full">
        <NextLink href={`/posts/${slug}`}>
            {/* <div
                className={`bg-[url('https://www.showmetech.com.br/wp-content/uploads//2023/01/destacada-chat-gpt-passa-em-mba-showmetech-1920x1024.png')] bg-cover bg-center h-72`}
            /> */}
            <img src={thumbnailUrl} alt={slug} className='h-48 w-full' />
        </NextLink>
        {tags && (
            <div className="flex items-center w-full">
                {tags.map((tag, i) => i === tags.length - 1 ? (
                    <Link href={`/categorias/${tag}`} key={`${slug}_${tag}`}>
                            { tag }
                        </Link>
                ) : (
                    <>
                        <Link href={`/categorias/${tag}`} key={`${slug}_${tag}`} px={0}>
                            { tag }
                        </Link>
                    </>
                ))}
            </div>
        )}
        <NextLink href={`/posts/${slug}`}>
            <h4 className='text-lg hover:text-indigo-700 transition-all duration-150'>
                {title}
            </h4>
        </NextLink>
        <div className="flex w-full">
            <p className='text-gray-500 text-sm pt-4'>
                { date }
            </p>
        </div>
    </div>
  )
}

export default PostCard