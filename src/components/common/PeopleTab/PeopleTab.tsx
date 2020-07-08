/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

import styles from './PeopleTab.module.scss';

interface PeopleTabProps {
  link: string;
  icon: string;
  title: string;
  description: string;
}

const PeopleTab: React.FC<PeopleTabProps> = ({
  icon,
  link,
  description,
  title,
}: PeopleTabProps) => {
  return (
    <a
      className={styles.Container}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={require(`./imgs/${icon}.jpg`)} className={styles.img} />
      <a>{title}</a>
      <p className={styles.text}>{description}</p>
    </a>
  );
};

export default PeopleTab;
