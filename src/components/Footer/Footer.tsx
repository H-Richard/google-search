import React from 'react';

import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <p> &copy; 2020 Richard Hong, all rights reserved.</p>
      <p>
        Proudly built with React, Typescript and{' '}
        <span role="img" aria-label="heart">
          ❤️.
        </span>
      </p>
      <p>
        <a
          href="https://github.com/H-Richard/google-search"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source Code
        </a>
      </p>
    </div>
  );
};

export default Footer;
