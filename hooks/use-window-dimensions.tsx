import React, { useCallback, useEffect, useState } from 'react'

const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window
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