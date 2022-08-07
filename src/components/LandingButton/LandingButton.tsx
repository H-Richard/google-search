import { LegacyRef, MouseEventHandler, PropsWithChildren } from 'react'
import styles from './LandingButton.module.scss'

interface Props extends PropsWithChildren {
  onClick?: MouseEventHandler
  buttonRef?: LegacyRef<HTMLButtonElement>
}

export const LandingButton: React.FC<Props> = ({
  children,
  onClick,
  buttonRef,
}: Props) => {
  return (
    <button className={styles.button} onClick={onClick} ref={buttonRef}>
      {children}
    </button>
  )
}
