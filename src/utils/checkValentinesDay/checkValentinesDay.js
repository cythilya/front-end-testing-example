import { getToday } from './getToday';

const checkValentinesDay = () => {
  const today = getToday();
  return today === '2/14' ? '情人節快樂' : '今天不是情人節';
};

export default checkValentinesDay;
