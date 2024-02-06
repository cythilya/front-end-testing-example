import { useState } from 'react';
import CounterValue from './CounterValue';
import DecrementButton from './DecrementButton';
import IncrementButton from './IncrementButton';

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <>
      <CounterValue count={count} />
      <DecrementButton onClick={decrement} />
      <IncrementButton onClick={increment} />
    </>
  );
};

export default Counter;
