import React from 'react';

import styles from './SkillsResult.module.scss';

interface Props {
  title: string;
  percent: number;
  proficiency: string;
  color: string;
}

const SkillsResult: React.FC<Props> = ({
  color,
  title,
  percent,
  proficiency,
}: Props) => {
  return (
    <div>
      <div className={styles.headingBar}>
        <span>{title}</span>
        <span className={styles.text}>{proficiency}</span>
      </div>
      <div className={styles.barContainer}>
        <span
          className={styles.bar}
          style={{ width: `${percent}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
};

export default SkillsResult;
