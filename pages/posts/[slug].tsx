import PostPage from '@/templates/post-page'
import { useRouter } from 'next/router'
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
import Link from '@/components/common/link'

interface Props {
  slug: string
  content: any
  minutesToRead: number
}

const components = { SyntaxHighlighter, LabeledImage }

const Post: React.FC<Props> = ({ slug, content, minutesToRead }) => {

  const { frontmatter } = content

  const router = useRouter()

  return (
    <>
      {/* { slug } */}
      <Head
        title={frontmatter.title}
        description={frontmatter.description}
      />
      <HeroImage  />
      <main className={`mx-auto max-w-6xl px-2 sm:px-6 lg:px-8 ${styles.postContent}`}>
        <article className="w-full">
          <div className="w-full flex items-center py-2 mt-6 text-sm">
            {frontmatter?.tags && frontmatter.tags.map(tag => (
              <Link href={`/categorias/${tag}`} key={tag}>
                {tag}
              </Link>
            ))}
            {minutesToRead && (
              <div className="flex items-center text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
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
            <div
              className='text-gray-500 text-sm pt-4'
            >
              {frontmatter.date}
            </div>
          </div>
          <h3 className='text-2xl py-6 mb-6'>
            {frontmatter.description}
          </h3>
          <MDXRemote {...content} components={components} />
        </article>
      </main>
    </>
  )
}

export default Post

export const getStaticPaths = async () => {
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

export const getStaticProps = async ({ params }) => {
  const markdown = fs.readFileSync(path.join('posts', params.slug + '.mdx'), 'utf-8')
  const matter = require('gray-matter')
  const { content } = matter(markdown)
  const readingTime = require('reading-time')
  const stats = readingTime(content)
  console.log(content)
  console.log('stats:', stats)


  const serializedContent = await serialize(markdown, {
    format: 'mdx',
    parseFrontmatter: true,
    scope: '', // we can supply variables to the mdx files via scope
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: []
    }
  })


  return {
    props: {
      slug: params.slug,
      content: serializedContent,
      minutesToRead: Math.ceil(stats.minutes)
    }
  }
}