// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

const mem = (fn) => {
  const cache = {}
  return function memFn(...args) {
    if (cache[args]) {
      return cache[args]
    }
    const result = fn.apply(this, args)
    cache[args] = result

    return result
  }
}

function slowfib(n) {
  //   let n1 = 0,
  //     n2 = 1,
  //     next = 0,
  //     res = 0

  //   for (let i = 0; i <= n; i++) {
  //     res = n1
  //     next = n1 + n2
  //     n1 = n2
  //     n2 = next
  //   }
  //   return res

  if (n < 2) {
    return n
  }
  return fib(n - 1) + fib(n - 2)
}

const fib = mem(slowfib)

module.exports = fib
