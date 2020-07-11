/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import FadeIn from 'react-fade-in';
import ResultsArray from './ResultsArray';
import VideoResult from '../../components/common/VideoResult/VideoResult';

import styles from './Videos.module.scss';

const Videos: React.FC = () => {
  return (
    <div className="page-container">
      <FadeIn delay={200}>
        <p className={styles.p1}>{`About ${ResultsArray.length} results (${
          (window.performance.timing.domContentLoadedEventEnd -
            window.performance.timing.navigationStart) /
          1000
        } seconds)`}</p>
      </FadeIn>
      <div className={styles.Flex}>
        <div className="results-container">
          <FadeIn delay={140}>
            {ResultsArray.map((obj) => {
              return <VideoResult {...obj} />;
            })}
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default Videos;
