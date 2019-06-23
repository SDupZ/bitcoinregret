const calculateDaysBetweenTwoDates = (dateOne, DateTwo) => {
  const d1 = new Date(dateOne);
  const d2 = new Date(DateTwo);
  const timeDiff = Math.abs(d2.getTime() - d1.getTime());
  const dayDifference = Math.floor(timeDiff / (1000 * 3600 * 24));
  return dayDifference;
};

export default calculateDaysBetweenTwoDates;
