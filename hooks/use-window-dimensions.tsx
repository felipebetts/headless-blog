import React, { useCallback, useEffect, useState } from 'react'

const getWindowDimensions = () => {
    // const { innerWidth: width, innerHeight: height } = window
    const width = typeof window !== "undefined" ? window?.innerWidth : 1200
    const height = typeof window !== "undefined" ? window?.innerHeight : 1200
    return {
        width,
        height
    }
}

const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())

    const handleResize = useCallback(() => {
        setWindowDimensions(getWindowDimensions())
    }, [])

    useEffect(() => {
        document.addEventListener('resize', handleResize, { passive: true })
        return () => document.removeEventListener('resize', handleResize)
    }, [handleResize])

    return windowDimensions
}

export default useWindowDimensions