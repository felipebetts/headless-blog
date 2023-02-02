import classNames from "@/utils/classnames";
import Autoplay from "embla-carousel-autoplay";
import { EmblaCarouselType } from "embla-carousel-react";
import useEmblaCarousel from "embla-carousel-react";
import React, { createContext, useCallback, useEffect, useState } from "react";
import styles from '@/styles/carousel.module.css'

interface ContextValue {
    embla: EmblaCarouselType | undefined
    selectedIndex: number
}

interface Props {
    children: React.ReactNode
    className?: string
}

export const CarouselContext = createContext<ContextValue>({
    embla: undefined,
    selectedIndex: -1
})

const Carousel: React.FC<Props> = ({ children, className }) => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [viewportRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: 'center',
        skipSnaps: false
    }, [Autoplay()])

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return
        onSelect()
        emblaApi.on('select', onSelect)
    }, [emblaApi, onSelect])

    return (
        <CarouselContext.Provider value={{
            embla: emblaApi,
            selectedIndex
        }}>
            <div
                ref={viewportRef}
                className={classNames(
                    "w-full overflow-hidden",
                    className || '',
                    styles.viewport
                )}
            >
                <div className={classNames("flex relative min-h-[240px]", styles.container)}>
                    { children }
                </div>
            </div>
        </CarouselContext.Provider>
    )
}

export default Carousel