import classNames from 'classnames'
import { useCallback, useContext, useMemo } from 'react'
import { SkillsContext } from 'src/contexts'
import { Percentage } from '../Percentage'

import styles from './SkillResult.module.scss'

const colors = [
  '#888601',
  '#0372c5',
  '#666666',
  '#4267b2',
  '#272727',
  '#000f5c',
  '#1c7db7',
  '#6a7dcd',
]

interface Props {
  history: number[]
  name: string
  symbol: React.ReactNode
}

export const SkillResult: React.FC<Props> = ({
  name,
  symbol,
  history,
}: Props) => {
  const { setSkill } = useContext(SkillsContext)
  const [change, percent] = useMemo(
    () => [
      (history.at(-1) ?? 0) - (history.at(-2) ?? 0),
      // prettier-ignore
      ((history.at(-1) ?? 0) - (history.at(-2) ?? 0)) / ((history.at(-1) ?? 100) / 100),
    ],
    [history]
  )

  const status = useMemo(() => (change > 0 ? 'up' : 'down'), [change])
  const color = useMemo(
    () => colors[Math.floor(Math.random() * colors.length)],
    []
  )

  const handleClick = useCallback(() => {
    setSkill(name)
  }, [name, setSkill])

  return (
    <div className={styles.container} onClick={handleClick}>
      <span
        style={{
          backgroundColor: color,
        }}
      >
        {symbol}
      </span>
      <div className={styles.name}>{name}</div>
      <div className={styles.value}>{history.at(-1)?.toFixed(2)}</div>
      <div className={classNames(styles.change, styles[status])}>
        {change >= 0 ? '+' : undefined}
        {change.toFixed(2)}
      </div>
      <div className={styles.percent}>
        <Percentage value={percent} responsive />
      </div>
    </div>
  )
}
