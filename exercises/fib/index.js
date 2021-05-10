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
  let array = []; 
  let currentVal; 
  for(let i = 0; i <= n; i++) {
    
    if (i === 0) {
      array[i] = i;
    } else if(i === 1) {
      array.push(i)
    } else {
      currentVal = array[i-1] + array[i-2]; 
      array.push(currentVal); 
    }
  }
  // console.log(n,array[n], array);
  return array[n];
}

// fib(4);

module.exports = fib;
