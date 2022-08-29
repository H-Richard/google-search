import styles from './LoadTime.module.scss'

interface Props {
  count?: number
}

export const LoadTime: React.FC<Props> = ({ count = 0 }: Props) => {
  const loadTime =
    typeof window !== 'undefined' &&
    (
      (window.performance.getEntries()[0] as PerformanceNavigationTiming)
        .duration / 1000
    ).toFixed(2)

  return (
    <p className={styles.p}>{`About ${count} results (${loadTime} seconds)`}</p>
  )
}
