import { NextPage } from 'next'
import Image from 'next/image'
import { images } from 'src/content'

import styles from './Images.module.scss'

export const Images: NextPage = () => {
  return (
    <div className={styles.container}>
      {images.map((id) => (
        <div className={styles.block} key={id}>
          <a
            href={`https://unsplash.com/photos/${id}`}
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.image}>
              <Image
                src={`https://source.unsplash.com/${id}`}
                alt="photography image"
                fill
                priority
              />
            </div>
          </a>
        </div>
      ))}
    </div>
  )
}
