import { AdSenseScript } from '@/components/libs/google-adsense'
import { AnalyticsScripts } from '@/components/libs/google-analytics'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <AdSenseScript />
        <AnalyticsScripts />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
