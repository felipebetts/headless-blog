import AnimatedPostHero from '@/components/home/AnimatedPostHero'
import Head from '@/components/layout/head'
import PostCard from '@/components/post/post-card'
import useTags from '@/hooks/use-tags'
import { PostParams } from '@/utils/types'
import { GetStaticProps } from 'next'

export interface StaticProps {
  posts: Array<PostParams>
  tags?: Array<string>
}
const Home: React.FC<StaticProps> = ({ posts, tags }) => {
  useTags(tags)
  return (
    <>
      <Head 
        title="Blog de tecnologia"
        description='O seu blog com informacoes e noticias quentinhas de tecnologia.'
      />
      <div className="mb-16 w-full min-w-screen h-[800px] lg:h-[60vh] grid grid-cols-1 grid-rows-3 lg:grid-rows-1 lg:grid-cols-3 xl:grid-cols-4">
        <div className="xl:col-span-2">
          <AnimatedPostHero post={posts[0]} />
        </div>
        <AnimatedPostHero post={posts[1]} />
        <AnimatedPostHero post={posts[2]} />
      </div>
      <main className='mx-auto max-w-6xl px-2 sm:px-6 lg:px-8 py-2 sm:py-4'>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {posts && posts.map((post, i) => i % 3 === 0 && i !== 0 ? (
          <>
            <div className="lg:my-10 w-full h-48 sm:h-full lg:h-48 rounded-md bg-slate-500 text-white text-xl text-center lg:col-span-3">
              AD
            </div>
            <div key={post.slug} className='w-full my-4'>
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
          <div key={post.slug} className='w-full my-4'>
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

        {/* <div className="my-10 w-full h-48 rounded-md bg-slate-500 text-white text-xl text-center">
          AD
        </div> */}

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
    console.log('tags:', tags)
    // console.log('posts:', posts)

    return {
      props: {
        posts,
        tags
      }
    }
}