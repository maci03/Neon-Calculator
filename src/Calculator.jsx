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
   if(value === "="){
    try{
        setDisplay(eval(display.toString()))
    }catch(error){
        setDisplay('Error');
    }
   }else if (value === 'C'){
    setDisplay('0')
   }else{
    setDisplay(display === '0' ? value : display + value);
   }
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
       {buttons.map((button) => (
        <button 
        key = {button}
        className = {`button ${button === '=' ? 'equal' : ''}`}
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
