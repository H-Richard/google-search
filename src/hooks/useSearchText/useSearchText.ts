import { useState, useCallback, useEffect } from 'react'
import { searchTextGeneratorBuilder, sleep } from 'src/utils'

export const useSearchText = (delay = 0) => {
  const [currentText, setCurrentText] = useState('')

  const animate = useCallback(async () => {
    const searchTextGenerator = searchTextGeneratorBuilder(
      'Rkvjarrd Jpong ',
      'Richard Hong'
    )()

    let value, done
    for (;;) {
      ;({ value, done } = searchTextGenerator.next())
      if (done || !value) return
      const [text, wait] = value
      await sleep(wait)
      if (text !== null) {
        setCurrentText(text)
      }
    }
  }, [])

  useEffect(() => {
    const delayedAnimate = async () => {
      await sleep(delay)
      animate()
    }
    delayedAnimate()
  }, [animate, delay])

  return currentText
}
