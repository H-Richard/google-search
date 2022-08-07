import { useContext } from 'react'
import { ThemeContext } from 'src/contexts'

import Image from 'next/image'

import styles from './Logo.module.scss'

export const Logo = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={styles.container}>
      <Image
        height={92}
        width={272}
        alt="themed-logo"
        src={
          theme === 'light'
            ? 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
            : 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png'
        }
      />
    </div>
  )
}
