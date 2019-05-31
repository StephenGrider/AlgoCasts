// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3
const cache = {'0': 0, '1': 1};
const fib = (n) => {
    if(n < 2 ){
        return n;
    }
    else {
        if(!cache[n] && n >= 2){
            let nth = fib(n - 1) + fib(n - 2);
            cache[n] = nth;
            console.log(cache);
            return cache[n];
        }
        else {
            return cache[n];
        }
    }
        

}

module.exports = fib;

//iterative

//create an array
// const fibArr = [0, 1];
// //O(n) runtime
// for (let i = 2; i <= n; i++) {
//     const prev = fibArr[i - 1];
//     const prevprev = fibArr[i - 2];

//     fibArr.push(prev + prevprev);
//}

console.log(fib(55));