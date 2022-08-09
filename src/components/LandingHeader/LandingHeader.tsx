import { AuthenticateButton, ThemeButton } from 'src/components'
import styles from './LandingHeader.module.scss'

export const menu = (
  <svg
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={styles.menu}
    width={24}
  >
    <path d="M0 0h24v24H0z" fill="none"></path>
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
  </svg>
)

export const dots = (
  <div className={styles.dots}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={styles.svg}
      width={24}
    >
      <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
    </svg>
  </div>
)

export const LandingHeader: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.links}>
        {menu}
        <p className={styles.tab}>ALL</p>
        <p className={styles.tab}>IMAGES</p>
        <p className={styles.redirect}>About</p>
        <p className={styles.redirect}>Store</p>
      </div>
      <div className={styles.links}>
        <ThemeButton />
        <p className={styles.app}>Gmail</p>
        <p className={styles.app}>Images</p>
        {dots}
        <AuthenticateButton>Sign in</AuthenticateButton>
      </div>
    </div>
  )
}
