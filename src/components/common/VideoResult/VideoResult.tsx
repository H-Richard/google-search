/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

import styles from './VideoResult.module.scss';

interface Props {
  title: string;
  id: string;
  description: string;
}

const Project: React.FC<Props> = ({ title, id, description }: Props) => {
  const link = `https://www.youtube.com/watch?v=${id}`;
  return (
    <div className={styles.Container}>
      <a
        className={styles.LinkContainer}
        target="_blank"
        href={link}
        rel="noopener noreferrer"
      >
        <a className={styles.title}>{title}</a>
        <p className={styles.link}>{link}</p>
      </a>
      <div className={styles.DescriptionContainer}>
        <div style={{ height: '65px', width: '116px' }}>
          <img
            src={`https://img.youtube.com/vi/${id}/default.jpg`}
            className={styles.img}
            alt="thumbnail"
          />
        </div>
        <div className={styles.Description}>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
