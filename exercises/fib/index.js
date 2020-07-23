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
  return memoize(fibUsingRecursion)(n);
}

function fibUsingIteration(n) {
  let fib = [0, 1];
  if (n <= 1) {
    return fib[n];
  }

  while (fib.length <= n) {
    const fibLength = fib.length;
    fib.push(fib[fibLength - 2] + fib[fibLength - 1]);
  }

  return fib[n];
}

function fibUsingRecursion(n) {
  if (n < 2) {
    return n;
  }

  return fibUsingRecursion(n - 1) + fibUsingRecursion(n - 2);
}

function memoize(fn) {
  const cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

module.exports = fib;
