/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import styles from './BlueButton.module.scss';

interface BlueButtonProps {
  text: string;
  onClick?: VoidFunction;
}

const BlueButton: React.FC<BlueButtonProps> = ({
  onClick,
  text,
}: BlueButtonProps) => {
  return (
    <div>
      <button
        className={styles.Button}
        onClick={onClick || ((): void => {})}
        type="button"
      >
        {text}
      </button>
    </div>
  );
};

export default BlueButton;
