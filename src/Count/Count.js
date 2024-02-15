import { useState } from 'react';

const Count = () => {
  const [counter, setCounter] = useState(0);

  const delayCount = () => {
    setTimeout(() => {
      setCounter(prevCounter => prevCounter + 1);
    }, 500);
  };

  return (
    <>
      <h1 data-test-id="counter">{counter}</h1>
      <button data-test-id="button-up" onClick={delayCount}>
        +
      </button>
      <button
        data-test-id="button-down"
        onClick={() => setCounter(prevCounter => prevCounter - 1)}
      >
        -
      </button>
    </>
  );
};

export default Count;
