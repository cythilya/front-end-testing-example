import { render, fireEvent } from '@testing-library/react';
import useCalculatorHook from './useCalculatorHook';

describe('useCalculatorHook', () => {
  test('should get 8 when add 5 and 3', () => {
    const TestComponent = () => {
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
            value={num1}
            onChange={handleNum1Change}
          />
          <select
            data-test-id="operator"
            value={operator}
            onChange={handleOperatorChange}
          >
            <option value="+">+</option>
          </select>
          <input
            data-test-id="number2"
            value={num2}
            onChange={handleNum2Change}
          />
          <button data-test-id="calculate" onClick={calculate}>
            Calculate
          </button>
          <div data-test-id="result">{result}</div>
        </div>
      );
    };

    const { getByTestId } = render(<TestComponent />);

    // 輸入數字
    fireEvent.change(getByTestId('number1'), { target: { value: '5' } });
    fireEvent.change(getByTestId('number2'), { target: { value: '3' } });

    // 選取運算符號
    fireEvent.change(getByTestId('operator'), { target: { value: '+' } });

    // 點擊計算按鈕
    fireEvent.click(getByTestId('calculate'));

    // 驗證結果
    expect(getByTestId('result')).toHaveTextContent('8');
  });
});
