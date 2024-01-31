import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter component', () => {
  it('should get 1 when click the increment button', () => {
    const { getByTestId } = render(<Counter />);
    fireEvent.click(getByTestId('increment-button'));
    expect(getByTestId('counter-value').textContent).toBe('1');
  });

  it('should get -1 when click the decrement button', () => {
    const { getByTestId } = render(<Counter />);
    fireEvent.click(getByTestId('decrement-button'));
    expect(getByTestId('counter-value').textContent).toBe('-1');
  });
});
