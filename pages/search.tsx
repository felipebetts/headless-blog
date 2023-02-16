import Pill from '@/components/common/pill'
import Head from '@/components/layout/head'
import PostCard from '@/components/post/post-card'
import useTags from '@/hooks/use-tags'
import { PostParams } from '@/utils/types'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import React from 'react'

interface StaticProps {
    posts: Array<PostParams>
    tags?: Array<string>
}

const Search: React.FC<StaticProps> = ({ posts, tags }) => {
    useTags(tags)

    const router = useRouter()
    const { q } = router.query

    // @ts-ignore
    const filteredPosts = q ? posts.filter(post => post.frontmatter.title.toLowerCase().includes(q.toLowerCase())) : null

    return (
        <>
          <Head 
            title="Blog de tecnologia"
            description='O seu blog com informacoes e noticias quentinhas de tecnologia.'
          />
          <main className='mx-auto max-w-6xl px-2 sm:px-6 lg:px-8 py-2 sm:py-4'>
            <h1
                className='font-semibold text-3xl md:text-4xl pt-4 pb-2'
            >
                {filteredPosts && `${filteredPosts.length}`} Resultado(s) para a busca: <Pill className='mx-2'>{q}</Pill>
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
                {filteredPosts && filteredPosts.map((post, i) => (
                    <div key={post.slug} className='w-full'>
                        <PostCard
                            date={post.frontmatter.date}
                            slug={post.slug}
                            tags={post.frontmatter.tags}
                            title={post.frontmatter.title}
                            thumbnailUrl={post.frontmatter.thumbnailUrl}
                            minutesToRead={post.minutesToRead}
                        />
                    </div>
                ))}
            </div>
          </main>
        </>
      )
}

export default Search

export const getStaticProps: GetStaticProps = async () => {
    const fs = require('fs')
    const path = require('path')
    const matter = require('gray-matter')

    const files = fs.readdirSync(path.join('posts'))

    const tags: Array<string> = []
    const posts = files
      .map((filename: string, i: number) => {
        const markdownWithMeta = fs.readFileSync(path.join('posts', filename))
        const { data, content } = matter(markdownWithMeta)
        const readingTime = require('reading-time')
        const stats = readingTime(content)
        const minutesToRead = Math.ceil(stats.minutes)
        
        data?.tags.forEach((el: string) => {
          if (!tags.includes(el)) {
            tags.push(el) 
          }
        })
        
        return {
          frontmatter: data,
          slug: filename.split('.')[0],
          minutesToRead
        }
      })
      .sort((a: PostParams, b: PostParams) => {
        const timeA = new Date(a.frontmatter.date).getTime()
        const timeB = new Date(b.frontmatter.date).getTime()
        return timeB - timeA
      })
    // console.log('tags:', tags)
    // console.log('posts:', posts)

    return {
      props: {
        posts,
        tags
      }
    }
}