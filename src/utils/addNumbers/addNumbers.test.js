const addNumbers = require('./addNumbers');

test('adds 0.1 and 0.2 to equal 0.3', () => {
  expect(addNumbers(0.1, 0.2)).toBe(0.3);
});

test('adds 5 and -3 to equal 2', () => {
  expect(addNumbers(5, -3)).toBe(2);
});
