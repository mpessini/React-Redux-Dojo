import React from 'react';
import styles from '../Counter.module.css';

class InputAmount extends React.Component {
  constructor() {
    super(); 
    this.state = {
      incrementAmount: 0
    }
  }

  handleChangeAmount = ({ target: { value } }) => {
    this.setState({
      incrementAmount: value,
    })
  }

  render() {
    const { incrementAmount } = this.state; 
    return (
      <div>
        <input
          className={styles.textbox}
          value={incrementAmount}
          onChange={ this.handleChangeAmount }
        />
        <button
          className={styles.button}
          onClick={() => {}}
        >
          Add Amount
        </button>
      </div>
    );
  }
  }

export default InputAmount;
