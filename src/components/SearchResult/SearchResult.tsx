import Image from 'next/image'
import { SearchLink } from '../SearchLink'

import styles from './SearchResult.module.scss'

const about = (
  <svg
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    height={18}
    width={18}
  >
    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
  </svg>
)

interface Props {
  link: string
  title: string
  description: JSX.Element
  extras?: JSX.Element
  image?: JSX.Element
}

export const SearchResult: React.FC<Props> = ({
  link,
  title,
  description,
  extras,
  image,
}: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <a href={link} target="_blank" rel="noreferrer">
          <div className={styles.hover}>
            <div className={styles.link}>
              <div className={styles.favicon}>
                <Image
                  height={16}
                  width={16}
                  src={`https://www.google.com/s2/favicons?domain_url=${link}&sz=50`}
                  alt="favicon"
                />
              </div>
              <SearchLink link={link} protocol />
              {about}
            </div>
            <h3 className={styles.title}>{title}</h3>
          </div>
        </a>
        <div className={styles.preview}>
          <div className={styles.text}>
            <div className={styles.description}>{description}</div>
            {extras && <div className={styles.extras}>{extras}</div>}
          </div>
          {image && <div className={styles.image}>{image}</div>}
        </div>
      </div>
      {image && <div className={styles.image}>{image}</div>}
    </div>
  )
}
