import { AdSenseScript } from '@/components/libs/google-ad-unit'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <AdSenseScript />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
