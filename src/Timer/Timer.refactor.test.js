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

  const advanceTimersByTime = (time) => {
    act(() => {
      jest.advanceTimersByTime(time);
    });
  };

  describe('waitTime is provided with valid integer', () => {
    let timerComponent;
    const renderTimerComponent = (props) => render(<Timer {...props} />);

    beforeEach(() => {
      timerComponent = renderTimerComponent({ waitTime: 3 });
    });

    it('should show remaining 2 seconds when after 1 second', () => {
      const { getByText } = timerComponent;

      advanceTimersByTime(1000);

      expect(getByText('Remaining seconds: 2')).toBeInTheDocument();
    });

    it("should show Time's Up when after 3 seconds", () => {
      const { getByText } = timerComponent;

      advanceTimersByTime(3000);

      expect(getByText("Time's Up")).toBeInTheDocument();
    });

    it('cleans up the timer on unmount', () => {
      const { unmount } = timerComponent;
      const spyOnClearInterval = jest.spyOn(global, 'clearInterval');

      unmount();

      expect(spyOnClearInterval).toHaveBeenCalledTimes(1);
    });
  });

  describe('when waitTime is provided with invalid integer', () => {
    it('should show error message when waitTime is -1', () => {
      try {
        render(<Timer waitTime={-1} />);
      } catch (e) {
        expect(e.message).toContain('waitTime must be greater than 0.');
      }
    });
  });
});
