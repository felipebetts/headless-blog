import Button from '@/components/common/button/button'
import Link from '@/components/common/link'
import Head from '@/components/layout/head'

export default function Home() {
  return (
    <>
      <Head 
        title="Blog de tecnologia"
        description='O seu blog com informacoes e noticias quentinhas de tecnologia.'
      />
      <div className="h-64">
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
        <Button>
          button
        </Button>
        <Link href="#link">
          link
        </Link>
      </div>
      <div className="h-64">
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
        <Button>
          button
        </Button>
        <Link href="#link">
          link
        </Link>
      </div>
      <div className="h-64">
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
        <Button>
          button
        </Button>
        <Link href="#link">
          link
        </Link>
      </div>
      <div className="h-64">
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
        <Button>
          button
        </Button>
        <Link href="#link">
          link
        </Link>
      </div>
    </>
  )
}
