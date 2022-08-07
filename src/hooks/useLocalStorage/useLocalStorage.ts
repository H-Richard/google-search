import { useEffect, useState } from 'react'

export const useLocalStorage = <T>(
  key: string,
  initialValue: T
): [T, (arg0: T) => void] => {
  const isClient = typeof window !== 'undefined'
  const [storedValue, setStoredValue] = useState<T>(initialValue)

  useEffect(() => {
    try {
      const item = isClient ? window?.localStorage?.getItem(key) : null
      setStoredValue(item ? (JSON.parse(item) as T) : initialValue)
    } catch (error) {
      console.log(error)
      setStoredValue(initialValue)
    }
  }, [initialValue, isClient, key])

  const setValue = (value: T) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      if (isClient)
        window?.localStorage?.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.log(error)
    }
  }
  return [storedValue, setValue]
}
