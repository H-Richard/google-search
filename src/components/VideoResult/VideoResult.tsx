import Image from 'next/image'
import { SearchLink } from 'src/components'
import styles from './VideoResult.module.scss'

interface Props {
  id: string
  title: string
  description: string
  uploadDate: string
}

export const VideoResult: React.FC<Props> = ({
  id,
  title,
  description,
  uploadDate,
}: Props) => {
  return (
    <div className={styles.container}>
      <a
        href={`https://www.youtube.com/watch?v=${id}`}
        target="_blank"
        rel="noreferrer"
      >
        <div className={styles.link}>
          <SearchLink link={`https://www.youtube.com/watch?v=${id}`} />
          <h3 className={styles.title}>{title}</h3>
        </div>
      </a>
      <div className={styles.content}>
        <div className={styles.thumbnail}>
          <Image
            src={`https://i1.ytimg.com/vi/${id}/mqdefault.jpg`}
            alt="thumbnail"
            fill
          />
        </div>
        <div className={styles.description}>
          <h4 className={styles.mobile}>{title}</h4>
          <p className={styles.text}>{description}</p>
          <p className={styles.stats}>
            <span>YouTube</span> · Richard Hong · {uploadDate}
          </p>
        </div>
      </div>
    </div>
  )
}
