// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

// using the modulo opperator (%)

// solution
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    // is number a multiple of 3 and 5
    if(i % 3 === 0 && i % 5 === 0) {
      console.log('fizzBuzz');
    } else if (i % 3 === 0) {
      // is the number a multiple of 3
      console.log('fizz');
    } else if (i % 5 === 0) {
      // is the number a multiple of 5
      console.log('buzz');
    } else {
      // print out the number
      console.log(i);
    }
  }
}

module.exports = fizzBuzz;
