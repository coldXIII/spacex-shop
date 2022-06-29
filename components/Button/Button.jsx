import React from 'react';
import styles from './button.module.scss';

const Button = (props) => {
  return (
    <button
      className={styles.Button}
      style={props.style}
      disabled={props.disabled}
    >
      <span> {props.title}</span>
    </button>
  );
};

export default Button;
