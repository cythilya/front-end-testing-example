import { useState } from 'react';
import useCalculatorHook from './useCalculatorHook';

const Calculator = () => {
  const {
    calculate,
    handleNum1Change,
    handleNum2Change,
    handleOperatorChange,
    num1,
    num2,
    operator,
    result,
  } = useCalculatorHook();

  return (
    <div>
      <input
        data-test-id="number1"
        type="number"
        value={num1}
        onChange={handleNum1Change}
      />
      <select
        data-test-id="operator"
        value={operator}
        onChange={handleOperatorChange}
      >
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input
        data-test-id="number2"
        type="number"
        value={num2}
        onChange={handleNum2Change}
      />
      <button onClick={calculateResult}>Calculate</button>
      <div data-test-id="result">{result}</div>
    </div>
  );
};

export default Calculator;