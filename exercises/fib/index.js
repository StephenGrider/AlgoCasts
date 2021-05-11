// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
//   let result = []; 
//   let currentVal; 
//   for(let i = 0; i <= n; i++) {
    
//     if (i === 0) {
//       result[i] = i;
//     } else if(i === 1) {
//       result.push(i)
//     } else {
//       currentVal = result[i-1] + result[i-2]; 
//       result.push(currentVal); 
//     }
//   }
//   return result[result.length -1];

// recursive solution 
  if (n < 2) { 
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

module.exports = fib;
