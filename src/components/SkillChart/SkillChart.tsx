import { linearGradientDef } from '@nivo/core'
import { ResponsiveLine, Serie } from '@nivo/line'
import { useContext, useMemo } from 'react'
import {
  backendDataRaw,
  databaseDataRaw,
  dataMLDataRaw,
  frontendDataRaw,
  infraDataRaw,
  mobileDataRaw,
  protocolDataRaw,
  skillsMap,
} from 'src/content'
import { SkillsContext } from 'src/contexts'
import { useWindowSize } from 'src/hooks'
import { Percentage } from 'src/components'

import styles from './SkillChart.module.scss'

const rawData: { [key: string]: Serie[] } = {
  FRONTEND: frontendDataRaw,
  MOBILE: mobileDataRaw,
  BACKEND: backendDataRaw,
  PROTOCOL: protocolDataRaw,
  DATABASE: databaseDataRaw,
  INFRA: infraDataRaw,
  DEVOPS: infraDataRaw,
  ML: dataMLDataRaw,
  DATA: dataMLDataRaw,
}

export const SkillChart: React.FC = () => {
  const { skill } = useContext(SkillsContext)
  const { data, name, symbol, type, category, history } = skillsMap[skill]
  const percent = useMemo(
    () =>
      // prettier-ignore
      ((history.at(-1) ?? 0) - (history.at(-2) ?? 0)) / ((history.at(-1) ?? 100) / 100),
    [history]
  )

  const { isMobile } = useWindowSize()

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <span>
          {type} &middot; {category} &middot; {symbol}{' '}
        </span>
        <h2>{name}</h2>
      </div>
      <div className={styles.stats}>
        <div>
          <h1>{history.at(-1).toFixed(2)}</h1> <Percentage value={percent} />
        </div>
      </div>
      <div className={styles.range}>
        <button title="Coming Soon">1 D</button>
        <button title="Coming Soon">5 D</button>
        <button title="Coming Soon">1 M</button>
        <button title="Coming Soon">6 M</button>
        <button title="Coming Soon">YTD</button>
        <button title="Coming Soon">1 Y</button>
        <button title="Coming Soon">2 Y</button>
        <button className={styles.active}>MAX</button>
      </div>
      <div className={styles.current}>
        <div className={styles.chart}>
          <ResponsiveLine
            animate={false}
            margin={{ bottom: 30, left: 30, right: 10 }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              format: isMobile ? '%Y' : '%b %Y',
              tickValues: isMobile ? 'every year' : 'every 6 months',
            }}
            axisLeft={{
              tickSize: 0,
              tickPadding: 5,
              tickRotation: 0,
              legendOffset: 0,
            }}
            data={[
              {
                id: 1,
                data,
              },
            ]}
            yScale={{
              type: 'linear',
              stacked: true,
              min: 0,
              max: Math.max(...history) + 10,
            }}
            xScale={{
              type: 'time',
              format: '%Y-%m-%d',
              useUTC: false,
              precision: 'month',
            }}
            gridYValues={5}
            xFormat="time:%Y-%m-%d"
            enableGridX={false}
            pointSize={0}
            curve="monotoneX"
            enableArea
            colors={[percent < 0 ? '#ea4436' : '#34a853']}
            defs={[
              linearGradientDef('gradientA', [
                { offset: 0, color: 'inherit' },
                { offset: 100, color: 'inherit', opacity: 0 },
              ]),
            ]}
            fill={[{ match: '*', id: 'gradientA' }]}
          />
        </div>
        <div className={styles.related}>
          <h2>Compare</h2>
          <ResponsiveLine
            animate={false}
            axisTop={null}
            axisRight={null}
            data={rawData[category] ?? rawData.FRONTEND}
            yScale={{
              type: 'linear',
              stacked: true,
            }}
            lineWidth={3}
            colors={{ scheme: 'set3' }}
            gridYValues={0}
            enableGridX={false}
            enableGridY={false}
            pointSize={0}
            yFormat={(val) => Number(val).toFixed(2)}
            enableSlices="x"
            curve="monotoneX"
          />
        </div>
      </div>
    </div>
  )
}
