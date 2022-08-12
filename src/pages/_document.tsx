import { Html, Head, Main, NextScript } from 'next/document'
import { Home, Images, Videos } from 'src/screens'

export default function Document() {
  return (
    <Html>
      <Head />
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
