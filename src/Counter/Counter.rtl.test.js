import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter component', () => {
  let counter;
  const renderCounter = () => {
    return <Counter />;
  };

  beforeEach(() => {
    counter = render(renderCounter());
  });

  afterEach(() => {
    counter.unmount();
  });

  it('should get 1 when click the increment button', () => {
    const { getByTestId } = counter;

    fireEvent.click(getByTestId('increment-button'));

    expect(getByTestId('counter-value').textContent).toBe('1');
  });

  it('should get -1 when click the decrement button', () => {
    const { getByTestId } = counter;

    fireEvent.click(getByTestId('decrement-button'));

    expect(getByTestId('counter-value').textContent).toBe('-1');
  });
});
