import React, { FC, useState } from 'react';
import './Counter.css';

const Counter: FC = () => {
  // State to store the current number value, initialized to 0
  const [number, setNumber] = useState<number>(0);

  // Function to increase the number by 1
  const increment = () => {
    setNumber(number + 1);
  };

  // Function to decrease the number by 1, only if the number is greater than 0
  const decrement = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  };

  return (
    <div className="counter-container">
      <h1 className="task-title">Task 1</h1>
      <h3>Counter</h3>
      {/* Display the current number */}
      <h3 className="counter-number">Number: {number}</h3>
      <div className="counter-buttons">
        {/* Button to increase the number */}
        <button onClick={increment}>Increase</button>
        {/* Button to decrease the number, disabled if the number is 0 */}
        <button onClick={decrement} disabled={number === 0}>Decrease</button>
      </div>
    </div>
  );
};

export default Counter;
