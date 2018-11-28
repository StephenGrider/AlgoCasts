 // --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {
//   const result = [0, 1];

//   for (let i = 2; i <= n; i++) {
//     const a = result[result.length -1];
//     const b = result[result.length - 2];
//     result[i] = a + b;
//   }
//   return result[n];
// }

function fib(n, result = [0, 1]) {

  while (result.length <= n) {
    const a = result[result.length - 1];
    const b = result[result.length - 2];
    result[result.length] = a + b;
    return fib(n, result)
  }
  return result[n];
}

module.exports = fib;
