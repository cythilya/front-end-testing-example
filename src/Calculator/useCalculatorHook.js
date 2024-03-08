import { useState } from 'react';

const useCalculatorHook = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operator, setOperator] = useState('+');
  const [result, setResult] = useState(0);

  const handleNum1Change = (e) => setNum1(parseFloat(e.target.value));
  const handleNum2Change = (e) => setNum2(parseFloat(e.target.value));
  const handleOperatorChange = (e) => setOperator(e.target.value);

  const calculate = () => {
    switch (operator) {
      case '+':
        setResult(num1 + num2);
        break;
      case '-':
        setResult(num1 - num2);
        break;
      case '*':
        setResult(num1 * num2);
        break;
      case '/':
        setResult(num1 / num2);
        break;
      default:
        setResult(0);
    }
  };

  return {
    calculate,
    handleNum1Change,
    handleNum2Change,
    handleOperatorChange,
    num1,
    num2,
    operator,
    result,
  };
};

export default useCalculatorHook;
