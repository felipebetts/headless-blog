import React from 'react'
import fs from 'fs'
import path from 'path'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import SyntaxHighlighter from 'react-syntax-highlighter'
import Head from '@/components/layout/head'
import HeroImage from '@/components/post/hero-image'
import styles from '@/styles/post.module.css'
import LabeledImage from '@/components/post/labeled-image'
import YoutubePlayer from '@/components/libs/youtube-player'
import { GetStaticPaths, GetStaticProps } from 'next'
import { AdSenseUnitScript } from '@/components/libs/google-adsense'
import useTags from '@/hooks/use-tags'
import { formatDate } from '@/utils/format'
import Link, { TagLink } from '@/components/common/link'
import Image from 'next/image'

interface Props {
  slug: string
  content: any
  minutesToRead: number
  tags?: string[]
}

const components = { SyntaxHighlighter, LabeledImage, YoutubePlayer, Link }

const Post: React.FC<Props> = ({ slug, content, minutesToRead, tags }) => {

  const { frontmatter } = content
  useTags(tags)

  return (
    <>
      <Head
        title={frontmatter.title}
        description={frontmatter.description}
      >
        <AdSenseUnitScript />
      </Head>
      <HeroImage src={frontmatter.thumbnailUrl} alt={`${slug}_hero_img`} />
      <main className={`mx-auto max-w-6xl px-2 sm:px-6 lg:px-8`}>
        <div className="w-full flex flex-col lg:flex-row">
          <article className="w-full flex-1 lg:pr-4 pb-6">
            <div className="w-full flex items-center py-2 mt-6 text-sm">
              {frontmatter?.tags && frontmatter.tags.map((tag: string) => (
                <TagLink href={`/categorias/${tag}`} key={tag}>
                  {tag}
                </TagLink>
              ))}
              <span className='pr-2'> • </span>
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
            <div className="py-6 border-b">
              <h1
                className="text-3xl sm:text-5xl font-semibold"
              >
                {frontmatter.title}
              </h1>
              <p className='text-slate-500 dark:text-slate-300 text-sm mt-4'>
                {formatDate(frontmatter.date)}
              </p>
              {/* <div className='flex items-center gap-2 mt-6 text-lg'>
                <Image src={`https://github.com/${frontmatter.author}.png`} height={36} width={36} className='rounded-full' alt={frontmatter.author} />
                <div>
                  <a className='text-slate-500 dark:text-slate-200 hover:text-indigo-700 dark:hover:text-indigo-500 font-semibold' href={`https://github.com/${frontmatter.author}`} target="_blank" rel="noopener noreferrer">{frontmatter.author}</a>
                  <p className='text-slate-500 dark:text-slate-300 text-sm'>
                    {formatDate(frontmatter.date)}
                  </p>
                </div>
              </div> */}
            </div>
            <div className='text-2xl py-6 mb-6 font-medium'>
              {frontmatter.description}
            </div>
            <div className={`${styles.postContent}`}>
              <MDXRemote {...content} components={components} />
            </div>
          </article>
          {/* <aside className='lg:shrink-0 w-full lg:w-64 p-2 relative'>
            <div className="w-full h-full max-h-[90vh] min-h-[240px] rounded-md sticky top-20 z-0 text-white text-4xl text-center">
              AD
            <AdSenseUnit />
            </div>
          </aside> */}
        </div>
      </main>
    </>
  )
}

export default Post

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(path.join('posts'))
  const paths = files.map((filename) => ({
    params: {
      slug: filename.split('.')[0]
    }
  }))

  return {
    paths,
    fallback: false
  }
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
  const matter = require('gray-matter')
  
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
  
  const markdown = fs.readFileSync(path.join('posts', params?.slug + '.mdx'), 'utf-8')
  const { content } = matter(markdown)
  const readingTime = require('reading-time')
  const stats = readingTime(content)
  const minutesToRead = Math.ceil(stats.minutes)

  const serializedContent = await serialize(markdown, {
    parseFrontmatter: true,
    scope: {}, // we can supply variables to the mdx files via scope
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
      format: 'mdx',
    }
  })


  return {
    props: {
      slug: params?.slug,
      content: serializedContent,
      minutesToRead,
      tags
    }
  }
}