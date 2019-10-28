// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memoize(fn) {
  let cache = {};
  return function(...args) {
    if (cache[args]) {
      return cache[args];
    } else {
      let result = fn.apply(this, args);
      cache[args] = result;
      return result;
    }
  };
}

function fib(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}

fib = memoize(fib);

//exponential run time bc recursive O(2^n), for every addtl element
//we are doing a dramatic increase in operations required (calling func again)

//linear run time because O(n)

// function fib(n) {
//   let arr = [0, 1];
//   let index = 2;
//
//   while (index <= n) {
//     let element = arr[index - 1] + arr[index - 2];
//
//     arr.push(element);
//     index++;
//   }
//   return arr[n];
// }

module.exports = fib;
