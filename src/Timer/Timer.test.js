import React from 'react';
import { render, act } from '@testing-library/react';
import Timer from './Timer';

describe('Timer component', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('should show remaining 2 seconds when after 1 second', () => {
    const { getByText } = render(<Timer />);

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(getByText('Remaining seconds: 2')).toBeInTheDocument();
  });

  it("should show Time's Up when after 3 seconds", () => {
    const { getByText } = render(<Timer />);

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    expect(getByText("Time's Up")).toBeInTheDocument();
  });

  it('cleans up the timer on unmount', () => {
    const { unmount } = render(<Timer />);
    const spyOnClearInterval = jest.spyOn(global, 'clearInterval');

    unmount();

    expect(spyOnClearInterval).toHaveBeenCalledTimes(1);
  });
});
