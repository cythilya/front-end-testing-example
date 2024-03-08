import { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator, setOperator] = useState('+');
  const [result, setResult] = useState('');

  const handleNum1Change = (e) => setNum1(e.target.value);
  const handleNum2Change = (e) => setNum2(e.target.value);
  const handleOperatorChange = (e) => setOperator(e.target.value);

  const calculateResult = () => {
    const parsedNum1 = parseFloat(num1);
    const parsedNum2 = parseFloat(num2);

    switch (operator) {
      case '+':
        setResult(parsedNum1 + parsedNum2);
        break;
      case '-':
        setResult(parsedNum1 - parsedNum2);
        break;
      case '*':
        setResult(parsedNum1 * parsedNum2);
        break;
      case '/':
        setResult(parsedNum1 / parsedNum2);
        break;
      default:
        setResult('Invalid operator');
    }
  };

  return (
    <div>
      <input type="number" value={num1} onChange={handleNum1Change} data-test-id="number1" />
      <select value={operator} onChange={handleOperatorChange} data-test-id="operator">
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input type="number" value={num2} onChange={handleNum2Change} data-test-id="number2" />
      <button onClick={calculateResult}>Calculate</button>
      <div data-test-id="result">Result: {result}</div>
    </div>
  );
}

export default Calculator;