import { linearGradientDef } from '@nivo/core'
import { ResponsiveLine } from '@nivo/line'
import { useMemo } from 'react'
import styles from './CategoryChart.module.scss'

interface Props {
  name: string
  data: { x: number; y: number }[]
}

export const CategoryChart: React.FC<Props> = ({ name, data }: Props) => {
  const [value, percent] = useMemo(
    () => [
      (data.at(-1)?.y as number)?.toFixed(2),
      // prettier-ignore
      ((data.at(-1)?.y as number) - (data.at(-2)?.y as number)) / (data.at(-1)?.y as number / 100),
    ],
    [data]
  )

  const color = useMemo(() => (percent > 0 ? '#34a853' : '#ea4436'), [percent])

  return (
    <div className={styles.container}>
      <h3>{name}</h3>
      <div className={styles.chart}>
        <ResponsiveLine
          data={[{ id: name, data }]}
          enableGridX={false}
          pointSize={0}
          curve="monotoneX"
          gridYValues={[50]}
          margin={{ bottom: -1 }}
          yScale={{
            min: 0,
            max: Math.max(...data.map(({ y }) => y), 50) + 10,
            type: 'linear',
          }}
          colors={[color]}
          defs={[
            linearGradientDef('gradientA', [
              { offset: 0, color: 'inherit' },
              { offset: 100, color: 'inherit', opacity: 0 },
            ]),
          ]}
          enableArea
          fill={[{ match: '*', id: 'gradientA' }]}
        />
      </div>
      <div className={styles.value}>
        <h4>{value}</h4>
        <span
          style={{
            color,
          }}
        >
          {percent >= 0 ? '+' : '-'}
          {Math.abs(percent).toFixed(2)}%
        </span>
      </div>
    </div>
  )
}
