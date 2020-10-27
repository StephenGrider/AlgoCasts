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
//   let temp = 0
//   let fib = 1
//   for (let i = 0; i < n -1; i++) {
//     const x = fib + temp
//     temp = fib
//     fib = x
//   }
//   return fib
// }

// function fib(n) {
//   let fib = [0, 1]
//   for (let i = 0; i < n ; i++) {
//     const x = fib[i] + fib[i+1]
//     fib.push(x)
//   }
//   return fib[n]
// }

// function fib(n, limit = 1, temp = 0, fibs = 1) {
//   if (limit === n) {
//     return fibs
//   }

//   if (limit < n) {
//     const x = fibs + temp
//     return fib(n, limit + 1, fibs, x)
//   }
// }

function fib(n) {
  if (n < 2) {
    return n
  }

  return fib(n - 1) + fib(n - 2)
}

module.exports = fib;
