import classNames from 'classnames'
import styles from './LandingFooter.module.scss'

export const LandingFooter: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>Canada</div>
      <div className={classNames(styles.row, styles.bottom)}>
        <div className={styles.content}>
          <span>Advertising</span>
          <span>Business</span>
          <span>How Search Works</span>
        </div>
        <div className={styles.content}>
          <span>Privacy</span>
          <span>Terms</span>
          <span>Settings</span>
        </div>
      </div>
    </div>
  )
}
