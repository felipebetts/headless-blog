import '@/styles/globals.css'
import Layout from '@/components/layout/layout'

import NProgress from 'nprogress'
import Router from 'next/router'
import type { AppProps } from 'next/app'

import 'nprogress/nprogress.css'
import { AdSenseScript } from '@/components/libs/google-ad-unit'
import ScrollObserver from '@/utils/scroll-observer'
import StoreProvider from '@/utils/store'


Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())
NProgress.configure({ showSpinner: false })


export default function App({ Component, pageProps }: AppProps) {
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
