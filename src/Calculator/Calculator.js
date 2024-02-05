import { useState } from 'react';
import addNumbers from '../utils/addNumbers/addNumbers';

const Calculator = () => {
  const [su, setSu] = useState(0);
  const [ad, setAd] = useState(0);
  const [result, setResult] = useState(0);

  const getResult = () => {
    const result = addNumbers(Number(su), Number(ad));
    setResult(result);
  };

  return (
    <>
      <input
        type="number"
        data-test-id="number-su"
        onChange={(e) => setSu(e.target.value)}
      />
      +
      <input
        type="number"
        data-test-id="number-ad"
        onChange={(e) => setAd(e.target.value)}
      />
      =<span data-test-id="result">{result}</span>
      <br />
      <button data-test-id="get-result-button" onClick={getResult}>
        Get result!
      </button>
    </>
  );
};

export default Calculator;
