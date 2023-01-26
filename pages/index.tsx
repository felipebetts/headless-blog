import Button from '@/components/common/button/button'
import Link from '@/components/common/link'
import Head from '@/components/layout/head'

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
}

const Home: React.FC<StaticProps> = ({ posts }) => {
  return (
    <>
      <Head 
        title="Blog de tecnologia"
        description='O seu blog com informacoes e noticias quentinhas de tecnologia.'
      />
      <main className='mx-auto max-w-6xl px-2 sm:px-6 lg:px-8'>
        <div className="h-64">
          <h1 className="text-3xl font-bold underline">
            Hello world!
          </h1>
          <Button>
            button
          </Button>
          <Link href="/dummy_post">
            link for dummy post
          </Link>
        </div>
        <ul>
          {posts && posts.map(post => (
            <Link href={`/posts/${post.slug}`} key={post.slug}>
              {post.frontmatter.title}
            </Link>
          ))}
        </ul>
      </main>
    </>
  )
}

export default Home

export const getStaticProps = async () => {
    const fs = require('fs')
    const path = require('path')
    const matter = require('gray-matter')

    const files = fs.readdirSync(path.join('posts'))

    const posts = files.map((filename: string, i: number) => {
      const markdownWithMeta = fs.readFileSync(path.join('posts', filename))
      const { data } = matter(markdownWithMeta)
      
      return {
        frontmatter: data,
        slug: filename.split('.')[0]
      }
    })
    console.log('posts:', posts)

    return {
      props: {
        posts
      }
    }
}