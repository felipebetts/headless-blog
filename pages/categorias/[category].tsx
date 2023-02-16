import React, { useEffect } from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import PostCard from '@/components/post/post-card'
import Pill from '@/components/common/pill'
import useTags from '@/hooks/use-tags'
import { PostParams } from '@/utils/types'
import Head from '@/components/layout/head'

interface StaticProps {
  category: string
  posts: Array<PostParams>
  tags?: Array<string>
}

const Category: React.FC<StaticProps> = ({ category, posts, tags }) => {
  useTags(tags)
  return (
    <>
      <Head
        title={`Posts sobre ${category}`}
        description={`Veja aqui informações quentinhas sobre ${category}`}
      />
      <main className='mx-auto max-w-6xl px-2 sm:px-6 lg:px-8 py-2 sm:py-4'>
        <h1
          className='font-semibold text-3xl md:text-4xl pt-4 pb-2'
        >
          Posts sobre <Pill>{category}</Pill>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
          {posts && posts.map((post, i) => i % 3 === 0 && i !== 0 ? (
            <>
              <div className="lg:my-10 w-full h-48 sm:h-full lg:h-48 rounded-md bg-slate-500 text-white text-xl text-center lg:col-span-3">
                AD
              </div>
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
            </>
          ) : (
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

export default Category

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(path.join('posts'))
  const tags: Array<string> = []
  files.forEach((filename: string, i: number) => {
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename))
    const { data } = matter(markdownWithMeta)
    
    data?.tags.forEach((el: string) => {
      if (!tags.includes(el)) {
        tags.push(el) 
      }
    })
  
  })
  // console.log('tags:', tags)

  const paths = tags.map(tag => ({
    params: {
      category: tag
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
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
    .filter((post, idx) => post?.frontmatter?.tags && post.frontmatter.tags.includes(params?.category))
    .sort((a, b) => {
      const timeA = new Date(a.frontmatter.date).getTime()
      const timeB = new Date(b.frontmatter.date).getTime()
      return timeB - timeA
    })

  return {
    props: {
      posts,
      category: params?.category,
      tags
    }
  }
}