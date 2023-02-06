import React from 'react'
import NextLink from 'next/link'
import { PostParams } from '@/utils/types'
import Image from 'next/image'

interface Props {
    post: PostParams
}

const CarouselPostHero: React.FC<Props> = ({ post }) => {
  return (
    <NextLink href={`posts/${post.slug}`}>
      <div className="w-full h-full overflow-hidden relative">
        {/* <div
          style={{ backgroundImage: `url('${post.frontmatter.thumbnailUrl}')`}}
          className={`relative transition-all duration-500 bg-cover hover:scale-110 bg-center h-full w-full`}
        >
            <div className="absolute top-0 left-0 h-full w-full bg-gray-900/50 z-10 transition-all duration-500">
            hover:scale-95
              <h2
                className="text-3xl md:text-5xl font-semibold text-white p-10 absolute bottom-0"
              >
                {post.frontmatter.title}
              </h2>
            </div>
        </div> */}
        <Image
          src={post.frontmatter.thumbnailUrl}
          alt={post.slug}
          fill
          // priority={true}
          className='object-cover'
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gray-900/50 z-10 transition-all duration-500">
          <h2
            className="text-3xl md:text-5xl font-semibold text-white p-10 absolute bottom-0"
          >
            {post.frontmatter.title}
          </h2>
        </div>
      </div>
    </NextLink>
  )
}

export default CarouselPostHero