/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
import React from 'react';

import FadeIn from 'react-fade-in';
import styles from './Projects.module.scss';
import LoadTime from '../../components/common/LoadTime/LoadTime';
import ResultsArray from './ResultsArray';
import ProjectResult from '../../components/common/ProjectResult/ProjectResult';

const Projects: React.FC = () => {
  return (
    <div className="page-container">
      <FadeIn delay={200}>
        <LoadTime length={ResultsArray.length} />
      </FadeIn>
      <div className={styles.Flex}>
        <div className="results-container">
          <FadeIn delay={140}>
            {ResultsArray.map((result, i) => {
              return typeof result === 'string' ? (
                <h2 key={i}>{result}</h2>
              ) : (
                <ProjectResult key={i} {...result} />
              );
            })}
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default Projects;
