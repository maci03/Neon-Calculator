import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [display, setDisplay] = useState('0');

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
  ];

  const handleButtonClick = (value) => {
   
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
       {buttons.map((button) => (
        <button 
        key = {button}
        className='button'
        onClick={() => handleButtonClick(button)}
        >
            {button}
        </button>
       ))}
      </div>
    </div>
  );
}

export default Calculator;
