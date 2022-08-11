import { NextPage } from 'next'
import Image from 'next/image'
import { images } from 'src/content'

import styles from 'src/styles/pages/Images.module.scss'

const Images: NextPage = () => {
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
                alt="Test"
                layout="responsive"
                objectFit="contain"
                width={0}
                height={0}
                priority
              />
            </div>
          </a>
        </div>
      ))}
    </div>
  )
}

export default Images
