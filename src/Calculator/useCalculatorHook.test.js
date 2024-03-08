import { render, fireEvent, screen, act } from '@testing-library/react';
import useCalculatorHook from './useCalculatorHook';

describe('useCalculatorHook', () => {
  test('should get 8 when add 5 and 3', () => {
    const TestComponent = () => {
      const {
        num1,
        num2,
        operator,
        calculate,
        handleNum1Change,
        handleNum2Change,
        handleOperatorChange,
        result,
      } = useCalculatorHook();

      return (
        <div>
          <input data-test-id="number1" onChange={handleNum1Change} value={num1} />
          <select data-test-id="operator" onChange={handleOperatorChange} value={operator}>
            <option value="+">+</option>
          </select>
          <input data-test-id="number2" onChange={handleNum2Change} value={num2} />
          <button data-test-id="calculate" onClick={calculate}>Calculate</button>
          <div data-test-id="result">{result}</div>
        </div>
      );
    };

    render(<TestComponent />);

    // 輸入數字
    const num1Input = screen.getByTestId('number1');
    const num2Input = screen.getByTestId('number2');
    fireEvent.change(num1Input, { target: { value: '5' } });
    fireEvent.change(num2Input, { target: { value: '3' } });

    // 選取運算符號
    const operatorSelect = screen.getByTestId('operator');
    fireEvent.change(operatorSelect, { target: { value: '+' } });

    // 點擊計算按鈕
    const calculateButton = screen.getByTestId('calculate');
    fireEvent.click(calculateButton);

    // 驗證結果
    const result = screen.getByTestId('result');
    expect(result.textContent).toBe('8');
  });
});
