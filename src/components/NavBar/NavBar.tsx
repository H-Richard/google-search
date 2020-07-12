/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import FadeIn from 'react-fade-in';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.scss';
import dots from './dots.svg';
import SearchPageBar from '../common/SearchPageBar/SearchBar';
import BlueButton from '../common/BlueButton/BlueButton';
import NavTab from '../common/NavTab/NavTab';

import logo from '../../pages/Hero/google.png';

const SearchNav: React.FC = () => {
  const nav = [
    {
      text: 'All',
      icon: 'search',
      to: '/',
    },
    {
      text: 'Images',
      icon: 'image',
      to: '/images',
    },
    {
      text: 'Projects',
      icon: 'book',
      to: '/projects',
    },
    {
      text: 'Skills',
      icon: 'finance',
      to: '/skills',
    },
    {
      text: 'Videos',
      icon: 'video',
      to: '/videos',
    },
  ];
  return (
    <div className={styles.Container}>
      <FadeIn>
        <div className={styles.top}>
          <FadeIn delay={320}>
            <Link to="/">
              <img src={logo} className={styles.logo} alt="logo" />
            </Link>
          </FadeIn>
          <FadeIn delay={120}>
            <div className={styles.searchContainer}>
              <SearchPageBar />
            </div>
          </FadeIn>
          <div className={styles.right}>
            <FadeIn delay={180}>
              <img src={dots} className={styles.dots} alt="menu" />
            </FadeIn>
            <FadeIn delay={280}>
              <BlueButton text="Sign in" />
            </FadeIn>
          </div>
        </div>
        <FadeIn delay={220}>
          <div className={styles.bottom}>
            {nav.map((obj) => {
              return <NavTab {...obj} key={obj.to} />;
            })}
          </div>
        </FadeIn>
      </FadeIn>
    </div>
  );
};

export default SearchNav;
