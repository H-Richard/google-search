/* eslint @next/next/google-font-display: 0 */
/* eslint @next/next/google-font-preconnect: 0 */
import { Html, Head, Main, NextScript } from 'next/document'
import { Home, Images, Videos } from 'src/screens'

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="preload"
          href="/fonts/ProductSans-Regular.ttf"
          as="font"
          crossOrigin=""
          type="font/ttf"
        />
        <link
          rel="preload"
          href="/fonts/ProductSans-Medium.ttf"
          as="font"
          crossOrigin=""
          type="font/ttf"
        />
        <link
          rel="preload"
          href="/fonts/ProductSans-Thin.ttf"
          as="font"
          crossOrigin=""
          type="font/ttf"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
          as="style"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <div style={{ display: 'none' }}>
          <Home />
          <Videos />
          <Images />
        </div>
      </body>
    </Html>
  )
}
