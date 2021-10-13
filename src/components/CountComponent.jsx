import React from 'react';
import styles from '../Counter.module.css';

function CountComponent() {
  return (
    <div>
      <span className={styles.value}>0</span>
    </div>
  );
}

export default CountComponent;
