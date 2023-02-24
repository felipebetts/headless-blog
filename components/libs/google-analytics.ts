import { useRouter } from "next/router"
import { useCallback, useEffect } from "react"

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
    // @ts-ignore
    window.gtag('config', GA_TRACKING_ID, {
        page_path: url
    })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
// @ts-ignore
export const event = ({ action, category, label, value }) => {
    // @ts-ignore
    window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value
    })
}

export const useAnalytics = () => {

    const nextRouter = useRouter()

    const handleRouteChange = useCallback((url: string) => {
        pageview(url)
    }, [])

    useEffect(() => {
        nextRouter.events.on('routeChangeComplete', handleRouteChange)
        return () => nextRouter.events.off('routeChangeComplete', handleRouteChange)
    }, [handleRouteChange, nextRouter])
}