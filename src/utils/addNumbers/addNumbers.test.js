const addNumbers = require('./addNumbers');

test('should return 0.3 when 0.1 + 0.2', () => {
  expect(addNumbers(0.1, 0.2)).toBe(0.3);
});

test('adds 5 and -3 to equal 2', () => {
  expect(addNumbers(5, -3)).toBe(2);
});
