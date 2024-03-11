import checkValentinesDay from './checkValentinesDay';
import { getToday } from './getToday';

jest.mock('./getToday', () => ({
  getToday: jest.fn(),
}));

describe('checkValentinesDay', () => {
  it('2/12 should not be Valentines Day', () => {
    getToday.mockReturnValue('2/12');
    expect(checkValentinesDay()).toBe('今天不是情人節');
  });

  it('2/14 should be Valentines Day', () => {
    getToday.mockReturnValue('2/14');
    expect(checkValentinesDay()).toBe('情人節快樂');
  });
});
