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

interface Props {
  slug: string
  content: any
}

const components = { SyntaxHighlighter, LabeledImage }

const Post: React.FC<Props> = ({ slug, content }) => {

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
          <h1
            className="text-3xl sm:text-5xl font-semibold py-6 border-b"
          >
            {frontmatter.title}
          </h1>
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
  console.log(content)


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
      content: serializedContent
    }
  }
}