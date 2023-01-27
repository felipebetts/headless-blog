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
            <div
                style={{ backgroundImage: `url('${thumbnailUrl}')`}}
                className={`bg-cover bg-center h-72`}
            />
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
            <h4 className='text-lg hover:text-indigo-700 transition-all duration-150 font-medium'>
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