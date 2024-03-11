import { fireEvent } from '@testing-library/react';
import { render } from '@testing-library/react';
import { act } from 'react-test-renderer';
import Calculator from './Calculator';

describe('Calculator', () => {
  test('should get 8 when add 5 and 3', () => {
    const { getByTestId } = render(<Calculator />);

    const suInput = getByTestId('number-su');
    const adInput = getByTestId('number-ad');
    const getResultButton = getByTestId('get-result-button');
    const result = getByTestId('result');

    act(() => {
      fireEvent.change(suInput, { target: { value: '5' } });
      fireEvent.change(adInput, { target: { value: '3' } });
      fireEvent.click(getResultButton);
    });

    expect(result).toHaveTextContent('8');
  });
});
