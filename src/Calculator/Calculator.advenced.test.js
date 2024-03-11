import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Calculator from './Calculator.advenced';

describe('Calculator', () => {
  it('should get 15 when 5 multiplied by 3', () => {
    const { getByTestId } = render(<Calculator />);

    // 輸入數字
    fireEvent.change(getByTestId('number1'), { target: { value: '5' } });
    fireEvent.change(getByTestId('number2'), { target: { value: '3' } });

    // 選取運算符號
    fireEvent.change(getByTestId('operator'), { target: { value: '*' } });

    // 點擊計算按鈕
    fireEvent.click(getByTestId('calculate'));

    // 驗證結果
    expect(getByTestId('result')).toHaveTextContent('15');
  });
});
