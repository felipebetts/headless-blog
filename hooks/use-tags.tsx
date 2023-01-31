import { Store } from '@/utils/store'
import React, { useCallback, useContext, useEffect } from 'react'

const useTags = (tags?: string[]) => {

  const { state, dispatch } = useContext(Store)

  const navigationTags = state.tags && state.tags.map(tag => ({
    name: tag,
    href: `/categorias/${tag}`,
    current: false
  }))

  const handleSetTags = useCallback(() => {
    if (!state.tags && dispatch && tags) {
        dispatch({ type: 'SET_TAGS', payload: tags })
      }
  }, [dispatch, state, tags])

  useEffect(() => {
    handleSetTags()
  }, [handleSetTags])

  return {
    tags,
    navigationTags
  }
}

export default useTags