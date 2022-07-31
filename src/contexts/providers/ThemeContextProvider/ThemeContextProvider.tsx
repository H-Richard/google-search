import { ReactNode } from 'react'
import { ThemeContext } from 'src/contexts'
import { useTheme } from 'src/hooks'

export const ThemeContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}: {
  children: ReactNode
}) => {
  const [theme, toggleTheme] = useTheme()
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`theme-${theme}`}>{children}</div>
    </ThemeContext.Provider>
  )
}
