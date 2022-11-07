import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  book,
  bookActive,
  finance,
  financeActive,
  image,
  imageActive,
  search,
  searchActive,
  video,
  videoActive,
} from './icons'
import {
  AuthenticateButton,
  Logo,
  menu,
  dots,
  ThemeButton,
  SearchBar,
} from 'src/components'

import styles from './Header.module.scss'
import classNames from 'classnames'

const routes = [
  {
    label: 'All',
    route: '/',
    icon: search,
    activeIcon: searchActive,
  },
  {
    label: 'Videos',
    route: '/videos',
    icon: video,
    activeIcon: videoActive,
  },
  {
    label: 'Images',
    route: '/images',
    icon: image,
    activeIcon: imageActive,
  },
  {
    label: 'Skills',
    route: '/skills',
    icon: finance,
    activeIcon: financeActive,
  },
  {
    label: 'Projects',
    route: '/projects',
    icon: book,
    activeIcon: bookActive,
  },
]

export const Header: React.FC = () => {
  const { pathname } = useRouter()

  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <div className={styles.logo}>
          <Logo height={30} width={92} />
        </div>
        <SearchBar searchText="Richard Hong" />
        <div className={styles.control}>
          <ThemeButton />
          {dots}
          <div className={styles.authenticate}>
            <AuthenticateButton>Sign in</AuthenticateButton>
          </div>
        </div>
      </div>
      {/* Mobile Only */}
      <div className={styles.mobile}>
        {menu}
        <Logo height={30} width={92} />
        <ThemeButton />
      </div>
      <div className={styles.bar}>
        <SearchBar searchText="Richard Hong" landing />
      </div>
      <div className={styles.navigation}>
        {routes.map(({ label, route, icon, activeIcon }) => {
          const isActive = pathname === route
          return (
            <Link key={route} href={route}>
              <div className={styles.link}>
                <span
                  className={classNames(styles.tab, {
                    [styles.active]: isActive,
                  })}
                >
                  <span>{isActive ? activeIcon : icon}</span> {label}
                </span>
              </div>
            </Link>
          )
        })}
        <div className={styles.overlay} />
      </div>
    </div>
  )
}
