import { NextPage } from 'next'
import { LoadTime, VideoResult } from 'src/components'
import { videos } from 'src/content'

import styles from './Videos.module.scss'

export const Videos: NextPage = () => {
  return (
    <div className={styles.container}>
      <LoadTime count={videos.length} />
      <div className={styles.results}>
        {videos.map((video) => (
          <VideoResult {...video} key={video.id} />
        ))}
      </div>
    </div>
  )
}
