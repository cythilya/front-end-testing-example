const getToday = () => {
  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  return `${month}/${day}`;
};

export { getToday };
