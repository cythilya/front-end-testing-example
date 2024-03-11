const findOutlier = (inputString) => {
  // split the input string into an array of integers
  const numbers = inputString.split(' ').map(Number);
  console.log(numbers);

  // determine the parity of the first three numbers
  const parity1 =
    numbers[0] % 2 === numbers[1] % 2 ? numbers[0] % 2 : numbers[2] % 2;

  // find the outlier based on parity
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== parity1) {
      return i + 1; // Return the position (1-indexed) of the outlier
    }
  }
};

export default findOutlier
