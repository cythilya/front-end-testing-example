import useCalculatorHook from './useCalculatorHook';

const Calculator = () => {
  const { calculate, handleChange, num1, num2, operator, result } =
    useCalculatorHook();

  return (
    <>
      <input
        data-test-id="number1"
        type="number"
        value={num1}
        onChange={handleChange}
      />
      <select data-test-id="operator" value={operator} onChange={handleChange}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input
        data-test-id="number2"
        type="number"
        value={num2}
        onChange={handleChange}
      />
      <button onClick={calculate}>Calculate</button>
      <div data-test-id="result">{result}</div>
    </>
  );
};

export default Calculator;
