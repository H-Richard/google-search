/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import FadeIn from 'react-fade-in';
import styles from './Hero.module.scss';

import SearchBar from '../../components/common/HeroSearchBar/SearchBar';
import NavBar from '../../components/common/HeroNavBar/NavBar';
import Button from '../../components/common/Button/Button';

import logo from './google.png';

interface HeroProps {
  search: VoidFunction;
}

const Hero: React.FC<HeroProps> = ({ search }: HeroProps) => {
  return (
    <div className={styles.main}>
      <NavBar />
      <FadeIn>
        <div className={styles.container}>
          <div>
            <img src={logo} alt="google logo" className={styles.img} />
          </div>
          <div
            style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
          >
            <SearchBar />
          </div>
        </div>
        <div className={styles.ButtonContainer}>
          <div>
            <Button onClick={search} text="Google Search" />
          </div>
          <Button text="I'm Feeling Lucky" />
        </div>
        <p>
          Google offered in: <a>Français</a>
        </p>
      </FadeIn>
    </div>
  );
};

export default Hero;
