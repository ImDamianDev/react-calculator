import { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [input, setInput] = useState('');

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleDelete = () => {
    setInput(input.slice(0, -1));
  };

  const handleEquals = () => {
    try {
      const result = eval(input);
      setInput(result.toString());
    } catch (e) {
      setInput('Error');
    }
  };

  const handlePercent = () => {
    try {
      const result = eval(input + '/100');
      setInput(result.toString());
    } catch (e) {
      setInput('Error');
    }
  };

  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  return (
    <div className="calculator">
      <input type="text" value={input} onChange={handleInput} />
      <div className='buttons'>
      <button onClick={handleClear} className="operator-button">C</button>
      <button onClick={handleDelete} className="operator-button">DE</button>
      <button onClick={handlePercent} className="operator-button">%</button>
      <button onClick={() => handleButtonClick('/')} className="operator-button">/</button>
      <button onClick={() => handleButtonClick('7')}>7</button>
      <button onClick={() => handleButtonClick('8')}>8</button>
      <button onClick={() => handleButtonClick('9')}>9</button>
      <button onClick={() => handleButtonClick('*')} className="operator-button">x</button>
      <button onClick={() => handleButtonClick('4')}>4</button>
      <button onClick={() => handleButtonClick('5')}>5</button>
      <button onClick={() => handleButtonClick('6')}>6</button>
      <button onClick={() => handleButtonClick('-')} className="operator-button">-</button>
      <button onClick={() => handleButtonClick('1')}>1</button>
      <button onClick={() => handleButtonClick('2')}>2</button>
      <button onClick={() => handleButtonClick('3')}>3</button>
      <button onClick={() => handleButtonClick('+')} className="operator-button">+</button>
      <button onClick={() => handleButtonClick('.')}>.</button>
      <button onClick={() => handleButtonClick('0')}>0</button>
      <button onClick={() => handleButtonClick('00')}>00</button>
      <button onClick={handleEquals} className="operator-button">=</button>      
      </div>
    </div>
  );
}

export default Calculator;