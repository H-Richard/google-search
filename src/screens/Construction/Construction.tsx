import { NextPage } from 'next'
import Image from 'next/image'

import styles from './Construction.module.scss'

export const Construction: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image
          src="https://source.unsplash.com/x-ghf9LjrVg"
          alt="construction"
          fill
          priority
        />
      </div>
      <div className={styles.content}>
        <h3>Under Construction</h3>
        <p>Page is coming soon! Probably</p>
      </div>
    </div>
  )
}
