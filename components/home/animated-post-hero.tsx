import React from 'react'
import NextLink from 'next/link'
import { PostParams } from '@/utils/types'
import Image from 'next/image'
import classNames from '@/utils/classnames'
import s from '@/styles/animated-post-hero.module.css'

interface Props {
    post: PostParams
}

const AnimatedPostHero: React.FC<Props> = ({ post }) => {
  return (
    <NextLink href={`posts/${post.slug}`}>
      <div className={classNames("w-full h-full overflow-hidden relative", s.container)}>
        <Image
          src={post.frontmatter.thumbnailUrl}
          alt={post.slug}
          fill
          // priority={true}
          className='object-cover transition-all duration-200'
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gray-900/50 z-10">
          <h2
            className="text-3xl md:text-5xl font-semibold text-white p-10 absolute bottom-0 transition-all duration-200"
          >
            {post.frontmatter.title}
          </h2>
        </div>
      </div>
    </NextLink>
  )
}

export default AnimatedPostHero