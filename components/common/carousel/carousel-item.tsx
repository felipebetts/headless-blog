import classNames from "@/utils/classnames"
import React, { useCallback, useContext } from "react"
import { CarouselContext } from "./carousel"
import styles from '@/styles/carousel.module.css'

interface Props {
    index: number
    children: React.ReactNode
}

const CarouselItem: React.FC<Props> = ({ index, children }) => {

    const { embla: emblaApi, selectedIndex } = useContext(CarouselContext)
    const isActive = selectedIndex === index
    
    const handleClick = useCallback(() => {
        if (emblaApi === undefined) return
        emblaApi.scrollTo(index)
    }, [emblaApi, index])

    return (
        <div
            className={classNames(
                isActive ? 'active z-20' : 'z-0',
                styles.slide
            )}
            onClick={handleClick}    
        >
            { children }
        </div>
    )
}

export default CarouselItem