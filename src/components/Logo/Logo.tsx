import { useContext } from 'react'
import { ThemeContext } from 'src/contexts'

import Image from 'next/image'

interface Props {
  height?: number
  width?: number
}

export const Logo: React.FC<Props> = ({ height = 92, width = 272 }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <Image
      priority
      height={height}
      width={width}
      alt="themed-logo"
      src={
        theme === 'light'
          ? 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
          : 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png'
      }
    />
  )
}
