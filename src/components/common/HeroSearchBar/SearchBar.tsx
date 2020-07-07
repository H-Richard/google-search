import React, { useState, useEffect, ReactElement } from 'react';
import styles from './SearchBar.module.scss';

import logo from './logo.svg';
import mic from './mic.svg';

interface SearchBarState {
  currentInput: string;
  desiredInput: string;
  deleting: boolean;
  speed?: number;
}

const SearchBar: React.FC = (): ReactElement => {
  const [state, setState] = useState<SearchBarState>({
    currentInput: '',
    desiredInput: 'Rkvjarrd Jpong ',
    deleting: false,
    speed: 20,
  });

  const getCurrentInput = (currentState: SearchBarState): string => {
    return currentState.deleting
      ? currentState.desiredInput.substring(
          0,
          currentState.currentInput.length - 1
        )
      : currentState.desiredInput.substring(
          0,
          currentState.currentInput.length + 1
        );
  };

  const getSpeed = (currentState: SearchBarState): number => {
    return currentState.deleting ? 15 : 35;
  };

  useEffect(() => {
    let timer: number;
    const animate = (): void => {
      setState((currentState) => ({
        ...currentState,
        currentInput: getCurrentInput(currentState),
        speed: getSpeed(currentState),
      }));
      timer = setTimeout(animate, state.speed);
    };
    animate();
    return (): void => clearTimeout(timer);
  }, [state.deleting, state.speed]);

  useEffect(() => {
    if (
      !state.deleting &&
      state.desiredInput === state.currentInput &&
      state.desiredInput !== 'Richard Hong'
    ) {
      setTimeout(() => {
        setState((currentState) => ({
          ...currentState,
          deleting: true,
        }));
      }, 500);
    } else if (
      state.deleting &&
      state.currentInput === '' &&
      state.desiredInput !== 'Richard Hong'
    ) {
      setTimeout(() => {
        setState((currentState) => ({
          ...currentState,
          deleting: false,
          desiredInput: 'Richard Hong',
        }));
      }, 500);
    }
  }, [state.currentInput, state.desiredInput, state.deleting]);

  return (
    <div
      className={
        state.currentInput.length === 0
          ? [styles.searchContainer].join(' ')
          : [styles.searchContainer, styles.active].join(' ')
      }
    >
      <img src={logo} className={styles.svg} alt="logo" />
      <input
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus
        className={styles.searchBar}
        value={state.currentInput}
      />
      <img src={mic} className={styles.mic} alt="mic" />
    </div>
  );
};

export default SearchBar;
