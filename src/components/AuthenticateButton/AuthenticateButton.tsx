import { PropsWithChildren } from 'react'

import styles from './AuthenticateButton.module.scss'

export const AuthenticateButton: React.FC<PropsWithChildren> = ({
  children,
}) => {
  return <button className={styles.button}>{children}</button>
}
