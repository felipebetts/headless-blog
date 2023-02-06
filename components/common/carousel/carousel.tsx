import classNames from "@/utils/classnames";
import Autoplay from "embla-carousel-autoplay";
import { EmblaCarouselType } from "embla-carousel-react";
import useEmblaCarousel from "embla-carousel-react";
import React, { createContext, useCallback, useEffect, useState } from "react";
import styles from '@/styles/carousel.module.css'
import CarouselPrevButton from "./carousel-prev-button";
import CarouselNextButton from "./carousel-next-button";

interface ContextValue {
    embla: EmblaCarouselType | undefined
    selectedIndex: number
    scrollPrev?: () => void
    scrollNext?: () => void
}

interface Props {
    children: React.ReactNode
    className?: string
    withButtons?: boolean
}

export const CarouselContext = createContext<ContextValue>({
    embla: undefined,
    selectedIndex: -1
})

const Carousel: React.FC<Props> = ({ children, className, withButtons }) => {
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

    const scrollPrev = useCallback(() => {
        if (!emblaApi) return
        emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (!emblaApi) return
        emblaApi.scrollNext()
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return
        onSelect()
        emblaApi.on('select', onSelect)
    }, [emblaApi, onSelect])

    return (
        <CarouselContext.Provider value={{
            embla: emblaApi,
            selectedIndex,
            scrollPrev,
            scrollNext
        }}>
            <div
                ref={viewportRef}
                className={classNames(
                    "w-full overflow-hidden relative",
                    className || '',
                    styles.viewport
                )}
            >
                <div className={classNames("flex relative h-full min-h-[240px]", styles.container)}>
                    { children }
                </div>
                {withButtons && (
                    <div className="flex absolute bottom-0 right-2 z-10 m-4">
                        <CarouselPrevButton />
                        <CarouselNextButton />
                    </div>
                )}
            </div>
        </CarouselContext.Provider>
    )
}

export default Carousel