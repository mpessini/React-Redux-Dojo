import React, { useEffect } from 'react';
import styles from './Counter.module.css';
import ButtonIncrement from './components/ButtonIncrement';
import ButtonDecrement from './components/ButtonDecrement';
import CountComponent from './components/CountComponent';
import InputAmount from './components/InputAmount';

export const Counter = () => {
  return (
    <>
      <div className={styles.row}>
        <ButtonDecrement />
        <CountComponent />
        <ButtonIncrement />
      </div>
      <div className={styles.row}>
        <InputAmount />
      </div>
    </>
  );
};
