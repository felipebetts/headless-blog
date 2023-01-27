import { useRouter } from 'next/router'
import React from 'react'

const Category = () => {
    const router = useRouter()
    const { category } = router.query
  return (
    <div>Categoria: {category}</div>
  )
}

export default Category