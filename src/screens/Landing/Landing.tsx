import { LegacyRef, useRef, useCallback, useEffect } from 'react'
import {
  LandingHeader,
  Logo,
  SearchBar,
  LandingButton,
  LandingFooter,
} from 'src/components'
import { sleep } from 'src/utils'

import styles from './Landing.module.scss'

interface LandingProps {
  searchText: string
  searchRef: LegacyRef<HTMLInputElement>
  onSearchClick: VoidFunction
}

export const Landing: React.FC<LandingProps> = ({
  searchText,
  searchRef,
  onSearchClick,
}: LandingProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null)

  const search = useCallback(async () => {
    await sleep(300)
    buttonRef.current?.focus()
    await sleep(400)
    buttonRef.current?.click()
  }, [])

  useEffect(() => {
    if (searchText === 'Richard Hong') search()
  }, [search, searchText])

  return (
    <div className={styles.container}>
      <LandingHeader />
      <div className={styles.landing}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <SearchBar searchRef={searchRef} searchText={searchText} landing />
        <div className={styles.buttons}>
          <LandingButton onClick={onSearchClick} buttonRef={buttonRef}>
            Google Search
          </LandingButton>
          <LandingButton>I&apos;m Feeling Lucky</LandingButton>
        </div>
      </div>
      <LandingFooter />
    </div>
  )
}
