import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Calculator from './Calculator.advenced';

describe('Calculator', () => {
  it('should get 15 when 5 multiplied by 3', () => {
    render(<Calculator />);

    // 輸入數字
    const num1Input = screen.getByTestId('number1');
    const num2Input = screen.getByTestId('number2');
    fireEvent.change(num1Input, { target: { value: '5' } });
    fireEvent.change(num2Input, { target: { value: '3' } });

    // 選取運算符號
    const operatorSelect = screen.getByTestId('operator');
    fireEvent.change(operatorSelect, { target: { value: '*' } });

    // 點擊計算按鈕
    const calculateButton = screen.getByText('Calculate');
    fireEvent.click(calculateButton);

    // 驗證結果
    const result = screen.getByTestId('result');
    expect(result.textContent).toBe('Result: 15');
  });
});