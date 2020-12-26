/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import FadeIn from 'react-fade-in';
import ResultsArray from './ResultsArray';

import styles from './Skills.module.scss';
import SkillsResult from '../../components/common/SkillsResult/SkillsResult';
import LoadTime from '../../components/common/LoadTime/LoadTime';

const Skills: React.FC = () => {
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
                <SkillsResult {...result} key={i} />
              );
            })}
          </FadeIn>
        </div>
        <FadeIn delay={500}>
          <div className={styles.side}>
            <span>Advanced: </span>
            <span>
              Deep knowledge of technology and related frameworks, skilled
              enough to teach, lead and architect projects.
            </span>
            <br />
            <span>Intermediate: </span>
            <span>
              Moderate knowledge of technology and its best practices, worked on
              multiple large scale projects.
            </span>
            <br />
            <span>Familiar: </span>
            <span>
              In the process of learning the technology, knows basic out of the
              box capabilities.
            </span>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default Skills;
