const divideNumbers = require('./divideNumbers');

describe('divideNumbers', () => {
  // 兩數整除，得到一個整數
  it('should return the correct integer when dividing two integers that are divisible', () => {
    expect(divideNumbers(8, 4)).toEqual(2);
  });

  // 兩數不整除，得到一個小數
  it('should return the correct fraction when dividing two numbers that are not divisible', () => {
    expect(divideNumbers(7, 2)).toEqual(3.5);
  });

  // 分子為零，得到零
  it('should return zero when numerator is zero', () => {
    expect(divideNumbers(0, 2)).toEqual(0);
  });

  // 分母不可為零，得到錯誤訊息
  it('should throw an error when dividing by zero', () => {
    expect(() => divideNumbers(10, 0)).toThrow('Cannot divide by zero');
  });
});
