import Button from '@/components/common/button/button'
import Link from '@/components/common/link'
import Head from '@/components/layout/head'
import PostCard from '@/components/post/post-card'
import { GetStaticProps } from 'next'

interface FrontMatterParams {
  title: string
  date: string
  description: string
  thumbnailUrl: string
  tags?: Array<string>
}

interface PostParams {
  frontmatter: FrontMatterParams
  slug: string
}
interface StaticProps {
  posts?: Array<PostParams>
  tags?: Array<string>
}

const Home: React.FC<StaticProps> = ({ posts, tags }) => {
  return (
    <>
      <Head 
        title="Blog de tecnologia"
        description='O seu blog com informacoes e noticias quentinhas de tecnologia.'
      />
      <main className='mx-auto max-w-6xl px-2 sm:px-6 lg:px-8 py-2 sm:py-4'>
        {/* <ul>
          {posts && posts.map(post => (
            <Link href={`/posts/${post.slug}`} key={post.slug}>
              {post.frontmatter.title}
            </Link>
          ))}
        </ul> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {posts && posts.map(post => (
          <div key={post.slug} className='w-full'>
            <PostCard
              date={post.frontmatter.date}
              slug={post.slug}
              tags={post.frontmatter.tags}
              title={post.frontmatter.title}
              thumbnailUrl={post.frontmatter.thumbnailUrl}
            />
          </div>
          ))}
        </div>
      </main>
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
    const fs = require('fs')
    const path = require('path')
    const matter = require('gray-matter')

    const files = fs.readdirSync(path.join('posts'))

    const tags: Array<string> = []
    const posts = files.map((filename: string, i: number) => {
      const markdownWithMeta = fs.readFileSync(path.join('posts', filename))
      const { data } = matter(markdownWithMeta)
      
      data?.tags.forEach((el: string) => {
        if (!tags.includes(el)) {
          tags.push(el) 
        }
      })
      
      return {
        frontmatter: data,
        slug: filename.split('.')[0]
      }
    })
    console.log('tags:', tags)
    // console.log('posts:', posts)

    return {
      props: {
        posts,
        tags
      }
    }
}