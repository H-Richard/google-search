import Image from 'next/image'

import styles from './SocialProfile.module.scss'

interface Props {
  src: string
  label: string
  url: string
}

export const SocialProfile: React.FC<Props> = ({ src, label, url }) => {
  return (
    <a className={styles.container} href={url} target="_blank" rel="noreferrer">
      <div className={styles.image}>
        <Image src={src} alt={label} fill />
      </div>
      {label}
    </a>
  )
}
