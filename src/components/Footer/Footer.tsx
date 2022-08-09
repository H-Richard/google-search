import styles from './Footer.module.scss'

export const Footer: React.FC = () => {
  return (
    <div className={styles.container}>
      <div>
        Built with NextJS, TypeScript and ❤️.{' '}
        <a
          href="https://github.com/H-Richard/google-search"
          target="_blank"
          rel="noreferrer"
        >
          Source Code
        </a>
        <br /> I am not affiliated with Google, in any way at all. This project
        was made for fun, please don&apos;t sue me.
      </div>
    </div>
  )
}
