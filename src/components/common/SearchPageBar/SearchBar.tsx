/* eslint-disable jsx-a11y/no-autofocus */
import React from 'react';
import styles from './SearchBar.module.scss';

import logo from './logo.svg';
import mic from './mic.svg';

const SearchBar: React.FC = () => {
  return (
    <div className={styles.searchContainer}>
      <input
        autoFocus
        className={styles.searchBar}
        value="Richard Hong"
        readOnly
      />
      <img src={mic} className={styles.mic} alt="mic" />
      <img src={logo} className={styles.svg} alt="logo" />
    </div>
  );
};

export default SearchBar;
