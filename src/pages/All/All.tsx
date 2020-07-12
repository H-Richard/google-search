/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable global-require */
import React from 'react';
import FadeIn from 'react-fade-in';

import InfoPanel from '../../components/KnowledgePane/KnowledgePane';
import Result from '../../components/common/SearchResult/SearchResult';

import ResultsArray from './ResultsArray';

import styles from './All.module.scss';
import LoadTime from '../../components/common/LoadTime/LoadTime';

const imgs = {
  1: require('./imgs/1.jpg'),
  2: require('./imgs/2.jpg'),
  3: require('./imgs/3.jpg'),
  4: require('./imgs/4.jpg'),
  5: require('./imgs/5.jpg'),
  6: require('./imgs/6.jpg'),
  7: require('./imgs/7.jpg'),
};

const All: React.FC = () => {
  return (
    <FadeIn delay={160}>
      <div className="page-container">
        <FadeIn delay={200}>
          <LoadTime length={ResultsArray.length} />
        </FadeIn>
        <div className={styles.Flex}>
          <div className="results-container">
            <FadeIn delay={160}>
              {ResultsArray.map((o) => {
                return <Result {...o} key={o.link} />;
              })}
            </FadeIn>
          </div>

          <FadeIn delay={220}>
            <div className={styles.Knowledge}>
              <div className={styles.imageContainer}>
                <div className={styles.bigCol}>
                  <img
                    src={imgs[1]}
                    className={[styles.img1, styles['top-left']].join(' ')}
                    alt=""
                  />
                </div>
                <div className={styles.col}>
                  <div className={[styles.row, styles['top-right']].join(' ')}>
                    <img
                      src={imgs[5]}
                      className={[styles.img1, styles.borderTop].join(' ')}
                      alt=""
                    />
                    <img
                      src={imgs[3]}
                      className={[styles.img1, styles.borderTop].join(' ')}
                      alt=""
                    />
                    <img
                      src={imgs[4]}
                      className={[styles.img1, styles['top-right']].join(' ')}
                      alt=""
                    />
                  </div>
                  <div className={styles.row}>
                    <img
                      src={imgs[2]}
                      className={[styles.img1, styles.borderBottom].join(' ')}
                      alt=""
                    />
                    <img
                      src={imgs[6]}
                      className={[styles.img1, styles.borderBottom].join(' ')}
                      alt=""
                    />
                    <img
                      src={imgs[7]}
                      className={[styles.img1, styles.borderEdge].join(' ')}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <span className={styles.title}>Richard Hong</span>
              <span className={styles.subtitle}>Software Engineer</span>
              <FadeIn delay={280}>
                <InfoPanel />
              </FadeIn>
            </div>
          </FadeIn>
        </div>
        <div />
      </div>
    </FadeIn>
  );
};

export default All;
