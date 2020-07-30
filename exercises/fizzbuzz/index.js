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

function fizzBuzz(n) {

  if (n % 3 === 0){
    return 'fizz'
  } else if (n % 5 === 0) {
    return 'buzz'
  } else {
    return n
  }

  // iterate through each number in the array
  // for (let i of n) {
  //   // if any number multiple by 3 return Fizz
  //   if (i % 3 === 0) {
  //     return 'Fizz'
  //   }
  //     // any number multiple by 5 return Buzz
  //     else if (i % 5 === 0) {
  //     return 'Buzz'
  //   }
  // }
  // return n
}

module.exports = fizzBuzz;
