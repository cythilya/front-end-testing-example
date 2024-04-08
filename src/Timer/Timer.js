import React, { useCallback, useEffect, useRef, useState } from 'react';

const timerTickInterval = 1000;

const Timer = ({ waitTime = 3 }) => {
  const [seconds, setSeconds] = useState(waitTime);
  const intervalIDRef = useRef(null);

  const startTimer = useCallback(() => {
    if (waitTime <= 0) {
      throw new Error('waitTime must be greater than 0.');
    }

    intervalIDRef.current = setInterval(
      () => setSeconds((prev) => prev - 1),
      timerTickInterval
    );
  }, []);

  const stopTimer = useCallback(() => {
    clearInterval(intervalIDRef.current);
    intervalIDRef.current = null;
  }, []);

  useEffect(() => {
    startTimer();
    return () => clearInterval(intervalIDRef.current);
  }, []);

  useEffect(() => {
    if (seconds === 0) {
      stopTimer();
    }
  }, [seconds]);

  return (
    <div>{seconds === 0 ? `Time\'s Up` : `Remaining seconds: ${seconds}`}</div>
  );
};

export default Timer;
