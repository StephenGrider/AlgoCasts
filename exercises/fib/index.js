// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memoize(fn){
  const cache = {};
  return (...args) => {
      if(cache[args]){
        return cache[args];
      }
      const result = fn.apply(this,args);
      cache[args] = result;
      return result;
  }
}

function fib(n) {
  if ( n< 2) return n;
  return fib(n-1) + fib(n-2);
  /*Solution 1
  if (n === 0) return 0;
  if (n === 1) return 1;

  let n_2 = 0;
  let n_1 = 1;
  let currentIndex = 2;
  let sum = n_2 + n_1;
  while(currentIndex <= n){
    sum = n_2 + n_1;
    n_2 = n_1;
    n_1 = sum;
    currentIndex++;
  }
  return sum;
  */
 /* Solution 2:
 const result = [0,1];
 for (let i=2; i <=n; i++){
   const a = result[i-1];
   const b = result[i-2];
   result.push(a+b);
 }
 return result[n];
 */
}
fib = memoize(fib);


module.exports = fib;
