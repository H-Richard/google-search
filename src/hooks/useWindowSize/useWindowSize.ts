import { useState, useEffect, useCallback, useMemo } from 'react'

const MOBILE_WIDTH = 1000

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  })

  const handleResize = useCallback(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize)
      handleResize()
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [handleResize])

  const isMobile = useMemo(() => windowSize.width < MOBILE_WIDTH, [windowSize])

  return { ...windowSize, isMobile }
}
