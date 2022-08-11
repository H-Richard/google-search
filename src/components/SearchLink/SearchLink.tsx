import { useMemo } from 'react'

import styles from './SearchLink.module.scss'

interface Props {
  link: string
  protocol?: boolean
}

export const SearchLink: React.FC<Props> = ({
  link,
  protocol = false,
}: Props) => {
  const url = useMemo(() => new URL(link), [link])
  const paths = useMemo(
    () => url.pathname.split('/').filter((el) => el),
    [url.pathname]
  )

  return (
    <p className={styles.link}>
      {protocol ? url.origin : url.host}{' '}
      {paths.map((path) => (
        <span key={`${url.origin}-${path}`}> › {path}</span>
      ))}
    </p>
  )
}
