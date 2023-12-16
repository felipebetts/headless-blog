import MdxEditor from '@/components/common/mdx-editor'
import React from 'react'

const CreatePost: React.FC = () => {
  return (
    <main className='mx-auto max-w-6xl px-2 sm:px-6 lg:px-8 py-2 sm:py-4'>
      <MdxEditor />
    </main>
  )
}

export default CreatePost