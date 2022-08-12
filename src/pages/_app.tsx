import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRef, useCallback, useEffect, useState } from 'react'

import { Compose, Footer, Header } from 'src/components'
import { ThemeContextProvider } from 'src/contexts'
import { useSearchText } from 'src/hooks/useSearchText'

import 'src/styles/globals.scss'

import { sleep } from 'src/utils'
import { Landing } from 'src/screens'

function GoogleSearch({ Component, pageProps }: AppProps) {
  const [landing, setLanding] = useState(true)
  const searchText = useSearchText(1000)
  const searchRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const focus = async () => {
      await sleep(500)
      searchRef.current?.focus()
    }

    focus()
  }, [])

  const onSearchClick = useCallback(() => {
    setLanding(false)
  }, [])

  return (
    <Compose components={[ThemeContextProvider]}>
      <Head>
        <title>Richard Hong - Google Search</title>
        <meta
          name="description"
          content="Personal website of Richard Hong in the style of a google search"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="root">
        {landing ? (
          <Landing
            searchText={searchText}
            searchRef={searchRef}
            onSearchClick={onSearchClick}
          />
        ) : (
          <>
            <Header />
            <Component {...pageProps} />
            <Footer />
          </>
        )}
      </div>
    </Compose>
  )
}

export default GoogleSearch
