import '@/styles/globals.css'
import Layout from '@/components/layout/layout'

import NProgress from 'nprogress'
import Router from 'next/router'
import type { AppProps } from 'next/app'

import 'nprogress/nprogress.css'
import { AdSenseScript } from '@/components/libs/google-adsense'
import ScrollObserver from '@/utils/scroll-observer'
import StoreProvider from '@/utils/store'
import { useAnalytics } from '@/components/libs/google-analytics'


Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())
NProgress.configure({ showSpinner: false })


export default function App({ Component, pageProps }: AppProps) {
  useAnalytics()
  return (
    <>
      {/* <AdSenseScript /> */}
      <StoreProvider>
        <ScrollObserver>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ScrollObserver>
      </StoreProvider>
    </>
  )
}
