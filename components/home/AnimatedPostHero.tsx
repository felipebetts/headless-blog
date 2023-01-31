import { PostParams } from '@/pages'
import React from 'react'
import NextLink from 'next/link'

interface Props {
    post: PostParams
}

const AnimatedPostHero: React.FC<Props> = ({ post }) => {
  return (
    <NextLink href={`posts/${post.slug}`}>
      <div className="w-full h-full overflow-hidden relative">
        <div
          style={{ backgroundImage: `url('${post.frontmatter.thumbnailUrl}')`}}
          className={`relative transition-all duration-500 bg-cover hover:scale-110 bg-center h-full w-full`}
        >
            <div className="absolute top-0 left-0 h-full w-full bg-gray-900/50 z-10 transition-all duration-500">
            {/* hover:scale-95 */}
              <h2
                className="text-3xl md:text-5xl font-semibold text-white p-10 absolute bottom-0"
              >
                {post.frontmatter.title}
              </h2>
            </div>
        </div>
      </div>
    </NextLink>
  )
}

export default AnimatedPostHero