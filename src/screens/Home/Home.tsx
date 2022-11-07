import type { NextPage } from 'next'
import Image from 'next/image'
import { About, SearchResult, LoadTime } from 'src/components'
import { searchResults } from 'src/content'

const about = (
  <svg
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={styles.about}
  >
    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
  </svg>
)

import styles from './Home.module.scss'

export const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <LoadTime count={searchResults.length} />
      <div className={styles.header}>
        <div className={styles.title}>
          <div className={styles.headshot}>
            <Image
              src="/images/1.png"
              alt="profile picture"
              height={56}
              width={42.1}
            />
          </div>
          <div className={styles.name}>
            <h2>Richard Hong {about}</h2>
            <p>Canadian Software Engineer {about}</p>
          </div>
        </div>
        <div className={styles.divider} />
      </div>
      <div className={styles.content}>
        <div className={styles.results}>
          <About />
          {searchResults.map((result) => (
            <SearchResult {...result} key={result.title} />
          ))}
        </div>
        <div className={styles.info}>
          <About />
        </div>
      </div>
    </div>
  )
}
