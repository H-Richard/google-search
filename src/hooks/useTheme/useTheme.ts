import { useCallback, useEffect, useMemo } from 'react'
import { useLocalStorage } from 'src/hooks'
import { Theme } from 'src/types/theme'

const THEME = 'THEME'

export const useTheme = (): [Theme, VoidFunction] => {
  const isClient = typeof window !== 'undefined'
  const defaultTheme = useMemo(() => {
    return isClient &&
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  }, [isClient])
  const [theme, setTheme] = useLocalStorage<Theme>(THEME, 'light')

  useEffect(() => {
    if (
      isClient &&
      window?.localStorage?.getItem(THEME) === null &&
      theme !== defaultTheme
    ) {
      setTheme(defaultTheme)
    }
  }, [defaultTheme, isClient, setTheme, theme])

  useEffect(() => {
    document.body.style.backgroundColor =
      theme === 'dark' ? '#171717' : '#ffffff'
  }, [theme])

  const toggleTheme = useCallback(
    () => setTheme(theme === 'light' ? 'dark' : 'light'),
    [setTheme, theme]
  )

  return [theme, toggleTheme]
}
