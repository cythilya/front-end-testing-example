const addNumbers = require('./addNumbers');

test('should return 0.3 when 0.1 + 0.2', () => {
  expect(addNumbers(0.1, 0.2)).toBe(0.3);
});

test('should return 2 when 5 - 3', () => {
  expect(addNumbers(5, -3)).toBe(2);
});

test.skip('should get error when inputs are not numer', () => {
  expect(addNumbers('1', '2')).toBe('Inputs must be numbers.');
});
