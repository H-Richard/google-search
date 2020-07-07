/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styles from './NavBar.module.scss';

import icon from './icon.svg';

const NavBar: React.FC = () => {
  return (
    <div className={styles.NavBar}>
      <div className={styles.Left}>
        <a>About</a>
        <a>Store</a>
      </div>
      <div className={styles.Right}>
        <a>Gmail</a>
        <a>Images</a>
        <img src={icon} alt="icon" className={styles.icon} />
        <a className={styles.button}>Sign in</a>
      </div>
    </div>
  );
};

export default NavBar;
