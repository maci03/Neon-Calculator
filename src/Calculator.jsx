import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [display, setDisplay] = useState('0');

  const handleButtonClick = (value) => {
   
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
       
      </div>
    </div>
  );
}

export default Calculator;
