const down = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    focusable="false"
    className=" NMm5M"
  >
    <path
      d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"
      fill="#a50e0e"
    ></path>
  </svg>
)

const up = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    focusable="false"
    className=" NMm5M"
  >
    <path
      d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"
      fill="#137333"
    ></path>
  </svg>
)

import classNames from 'classnames'
import { useMemo } from 'react'
import styles from './Percentage.module.scss'

interface Props {
  value?: number
  responsive?: boolean
}

export const Percentage: React.FC<Props> = ({
  value = 0,
  responsive = false,
}) => {
  const status = useMemo(() => (value >= 0 ? 'up' : 'down'), [value])

  return (
    <div
      className={classNames(styles.container, styles[status], {
        [styles.mobile]: responsive,
      })}
    >
      {value > 0 ? up : down} {Math.abs(value).toFixed(2)}%
    </div>
  )
}
