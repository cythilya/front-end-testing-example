import { fireEvent, screen } from '@testing-library/react';
import { render } from '@testing-library/react';
import { act } from 'react-test-renderer';
import Calculator from './Calculator';

describe('Calculator', () => {
  test('should get 8 when add 5 and 3', () => {
    render(<Calculator />);

    const suInput = screen.getByTestId('number-su');
    const adInput = screen.getByTestId('number-ad');
    const getResultButton = screen.getByTestId('get-result-button');
    const result = screen.getByTestId('result');

    act(() => {
      fireEvent.change(suInput, { target: { value: '5' } });
      fireEvent.change(adInput, { target: { value: '3' } });
      fireEvent.click(getResultButton);
    });

    expect(result.textContent).toBe('8');
  });
});
