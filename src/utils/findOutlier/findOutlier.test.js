import findOutlier from './findOutlier';

describe('findOutlier', () => {
  test('should return the position of the outlier 2 when input 10 9 8 6 4 2', () => {
    const inputString = '10 9 8 6 4 2';
    expect(findOutlier(inputString)).toBe(2); // 9 is the outlier
  });

  test('should return the position of the outlier 4 when input 7 9 1 6 3 5', () => {
    const inputString = '7 9 1 6 3 5';
    expect(findOutlier(inputString)).toBe(4); // 6 is the outlier
  });
});
