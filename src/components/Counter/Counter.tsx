import React, { FC, useState } from 'react';
import './Counter.css';

const Counter: FC = () => {
  const [number, setNumber] = useState<number>(0);

  const increment = () => {
    setNumber(number + 1);
  };

  const decrement = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  };

  return (
    <div className="counter-container">
      <h1 className="task-title">Task 1</h1>
      <h3>Counter</h3>
      <h3 className="counter-number">Number: {number}</h3>
      <div className="counter-buttons">
        <button onClick={increment}>Increase</button>
        <button onClick={decrement} disabled={number === 0}>Decrease</button>
      </div>
    </div>
  );
};

export default Counter;
