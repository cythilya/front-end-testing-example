import addDays from './addDays';

test('should get the date of 5 days from now', () => {
  const date = new Date('2020-01-01');

  const result = addDays(date, 5);

  expect(result).toEqual(new Date('2020-01-06'));
});
