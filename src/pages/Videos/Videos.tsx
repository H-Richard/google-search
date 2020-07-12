/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import FadeIn from 'react-fade-in';
import ResultsArray from './ResultsArray';
import VideoResult from '../../components/common/VideoResult/VideoResult';

import styles from './Videos.module.scss';
import LoadTime from '../../components/common/LoadTime/LoadTime';

const Videos: React.FC = () => {
  return (
    <div className="page-container">
      <FadeIn delay={200}>
        <LoadTime length={ResultsArray.length} />
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
