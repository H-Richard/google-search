/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import FadeIn from 'react-fade-in';
import ResultsArray from './ResultsArray';

import styles from './Skills.module.scss';
import SkillsResult from '../../components/common/SkillsResult/SkillsResult';

const Skills: React.FC = () => {
  return (
    <div className="page-container">
      <FadeIn delay={200}>
        <p className="p1">{`About ${ResultsArray.length} results (${
          (window.performance.timing.domContentLoadedEventEnd -
            window.performance.timing.navigationStart) /
          1000
        } seconds)`}</p>
      </FadeIn>
      <div className={styles.Flex}>
        <div className="results-container">
          <FadeIn delay={140}>
            {ResultsArray.map((result) => {
              return typeof result === 'string' ? (
                <h2>{result}</h2>
              ) : (
                <SkillsResult {...result} key={result.title} />
              );
            })}
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default Skills;
