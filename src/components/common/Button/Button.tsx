import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  onClick?: VoidFunction;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }: ButtonProps) => {
  return (
    <div>
      <button onClick={onClick} className={styles.Button} type="button">
        {text}
      </button>
    </div>
  );
};

export default Button;
