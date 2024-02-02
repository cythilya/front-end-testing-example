const divideNumbers = require('./divideNumbers');

describe('divideNumbers', () => {
  it('should return the correct integer when dividing two integers that are divisible', () => {
    expect(divideNumbers(8, 4)).toEqual(2);
  });

  it('should return the correct fraction when dividing two numbers that are not divisible', () => {
    expect(divideNumbers(7, 2)).toEqual(3.5);
  });

  it('should return zero when numerator is zero', () => {
    expect(divideNumbers(0, 2)).toEqual(0);
  });

  it('should throw an error when dividing by zero', () => {
    expect(() => divideNumbers(10, 0)).toThrow('Cannot divide by zero');
  });
});
