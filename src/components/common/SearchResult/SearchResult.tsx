/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import styles from './SearchResult.module.scss';

interface SearchResultProps {
  link: string;
  title: string;
  description: string;
}

const SearchResult: React.FC<SearchResultProps> = ({
  link,
  title,
  description,
}: SearchResultProps) => {
  return (
    <div className={styles.Container}>
      <a
        className={styles.LinkContainer}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <a className={styles.title}>{title}</a>
        <p className={styles.link}>{link}</p>
      </a>
      <p>{description}</p>
    </div>
  );
};

export default SearchResult;
