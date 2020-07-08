/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

import styles from './SocialTab.module.scss';

interface SocialTabProps {
  link: string;
  icon: string;
  title: string;
}

const SocialTab: React.FC<SocialTabProps> = ({
  link,
  icon,
  title,
}: SocialTabProps) => {
  return (
    <a
      className={styles.Container}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={require(`./imgs/${icon}.png`)} className={styles.img} />
      <a>{title}</a>
    </a>
  );
};

export default SocialTab;
