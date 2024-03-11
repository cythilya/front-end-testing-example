import React from 'react';
import { render, waitFor, fireEvent, act } from '@testing-library/react';
import Count from './Count';

beforeAll(() => {
  jest.useFakeTimers();
});

afterAll(() => {
  jest.useRealTimers();
});

it('should get 1 when click + button', () => {
  const { getByTestId } = render(<Count />);
  fireEvent.click(getByTestId('button-up'));

  act(() => {
    jest.advanceTimersByTime(500);
  });

  expect(getByTestId('counter')).toHaveTextContent('1');
});

it('should get 1 when click + button', async () => {
  const { getByTestId } = render(<Count />);

  fireEvent.click(getByTestId('button-up'));

  await waitFor(() => {
    expect(getByTestId('counter')).toHaveTextContent('1');
  });
});

it.skip('should get 1 when click + button', () => {
  const { getByTestId } = render(<Count />);

  act(() => {
    fireEvent.click(getByTestId('button-up'));
  });

  expect(getByTestId('counter')).toHaveTextContent('1');
});

it.skip('should get 1 when click + button', () => {
  const { getByTestId } = render(<Count />);

  fireEvent.click(getByTestId('button-up'));

  expect(getByTestId('counter')).toHaveTextContent('1');
});

it('should get -1 when click - button', () => {
  const { getByTestId } = render(<Count />);

  act(() => {
    fireEvent.click(getByTestId('button-down'));
  });

  expect(getByTestId('counter')).toHaveTextContent('-1');
});
