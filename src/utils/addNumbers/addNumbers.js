const addNumbers = (a, b) => Number((a + b).toFixed(1));

// const addNumbers = (a, b) => {
//   if (typeof a !== 'number' || typeof b !== 'number') {
//     return 'Inputs must be numbers.';
//   }
//   return Number((a + b).toFixed(1));
// };

module.exports = addNumbers;
