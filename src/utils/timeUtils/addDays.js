const addDays = (currentDate, daysToAdd) => {
  // should get the date of daysToAdd days from currentDate
  const result = new Date(currentDate);
  result.setDate(result.getDate() + daysToAdd);
  return result;
};

export default addDays;
