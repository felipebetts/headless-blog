import React, { useCallback, useEffect, useState } from 'react'

const useDarkMode = () => {
    const [theme, setTheme] = useState('light')
    const colorTheme = theme === 'dark' ? 'light' : 'dark'

    const handleSetThemeClass = useCallback(() => {
        const root = window.document.documentElement;
        root.classList.remove(colorTheme);
        root.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [colorTheme, theme])

    useEffect(() => {
        handleSetThemeClass()
    }, [handleSetThemeClass])

    useEffect(() => {
        console.log('theme:', theme)
        console.log('colorTheme:', colorTheme)
    }, [colorTheme, theme])
    
    return {colorTheme, setTheme}
}

export default useDarkMode