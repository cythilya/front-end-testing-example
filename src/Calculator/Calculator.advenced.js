import { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator, setOperator] = useState('+');
  const [result, setResult] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'num1') {
      setNum1(value);
    } else if (name === 'num2') {
      setNum2(value);
    } else if (name === 'operator') {
      setOperator(value);
    }
  };

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
      <input
        data-test-id="number1"
        type="number"
        name="num1"
        value={num1}
        onChange={handleChange}
      />
      <select
        data-test-id="operator"
        name="operator"
        value={operator}
        onChange={handleChange}
      >
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input
        data-test-id="number2"
        type="number"
        name="num2"
        value={num2}
        onChange={handleChange}
      />
      <button onClick={calculateResult}>Calculate</button>
      <div data-test-id="result">{result}</div>
    </div>
  );
};

export default Calculator;