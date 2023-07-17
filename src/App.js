import React, { useState } from 'react';
import { create, all } from 'mathjs';
import './App.css';

const math = create(all);

function App() {
  const [expression, setExpression] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        const result = math.evaluate(expression);
        setExpression(result.toString());
      } catch (error) {
        setExpression('Error');
      }
    } else if (value === 'C') {
      setExpression('');
    } else {
      setExpression(expression + value);
    }
  };

  return (
    <div className="calculator">
      <div className='screen'>{expression}</div>
      <div className='row'>
        <button onClick={() => handleButtonClick('%')}>%</button>
        <button onClick={() => handleButtonClick('C')}>C</button>
        <button onClick={() => setExpression(expression.slice(0, -1))}>&larr;</button>
        <button className='operador' onClick={() => handleButtonClick('/')}>÷</button>
      </div>
      <div className='row'>
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button className='operador' onClick={() => handleButtonClick('*')}>x</button>
      </div>
      <div className='row'>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button className='operador' onClick={() => handleButtonClick('-')}>-</button>
      </div>
      <div className='row'>
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button className='operador' onClick={() => handleButtonClick('+')}>+</button>
      </div>
      <div className='row'>
        <button onClick={() => handleButtonClick('.')}>.</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button className='igual' onClick={() => handleButtonClick('=')}>=</button>
      </div>
    </div>
  );
}

export default App;
