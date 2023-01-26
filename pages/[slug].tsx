import HeroImage from '@/components/post/hero-image'
import ImageLabel from '@/components/post/image-label'
import Paragraph from '@/components/post/paragraph'
import SectionTitle from '@/components/post/section-title'
import PostPage from '@/templates/post-page'
import { useRouter } from 'next/router'
import React from 'react'

const Post = () => {

  const router = useRouter()
  const { slug } = router.query

  return <PostPage />
}

export default Post