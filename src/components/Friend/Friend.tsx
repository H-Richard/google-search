import Image from 'next/image'
import styles from './Friend.module.scss'

interface Props {
  src: string
  name: string
  url: string
  label: string
}

export const Friend: React.FC<Props> = ({ url, name, label, src }: Props) => {
  return (
    <a className={styles.container} href={url} target="_blank" rel="noreferrer">
      <div className={styles.image}>
        <Image src={src} alt={name} layout="fill" />
      </div>
      <div className={styles.text}>
        <p className={styles.name}>{name}</p>
        <p className={styles.label}>{label}</p>
      </div>
    </a>
  )
}
