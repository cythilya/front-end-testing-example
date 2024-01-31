import React, { useState, useEffect, useRef, useCallback } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(3);
  const intervalIDRef = useRef(null);
  const startTimer = useCallback(() => {
    intervalIDRef.current = setInterval(
      () => setSeconds((prev) => prev - 1),
      1000
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
    if (seconds === 0) stopTimer();
  }, [seconds]);

  return (
    <div>{seconds === 0 ? `Time\'s Up` : `Remaining seconds: ${seconds}`}</div>
  );
};

export default Timer;
