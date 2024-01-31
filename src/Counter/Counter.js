import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <>
      <div data-test-id="counter-value">{count}</div>
      <button data-test-id="decrement-button" onClick={decrement}>
        -
      </button>
      <button data-test-id="increment-button" onClick={increment}>
        +
      </button>
    </>
  );
};

export default Counter;
