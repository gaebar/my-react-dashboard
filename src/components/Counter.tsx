import React, { useState } from 'react';

const Counter: React.FC = () => {
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
    <div style={{ backgroundColor: '#D4D4A7', padding: '10px', borderRadius: '5px' }}>
      <h2>Task 1</h2>
      <h3>Number: {number}</h3>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement} disabled={number === 0}>Decrease</button>
    </div>
  );
};

export default Counter;
