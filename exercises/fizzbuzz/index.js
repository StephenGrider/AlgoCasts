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

  for (let i = 1; i <= n; i++){
    // is the number multiple of 3 & 5
    if (i % 3 === 0 && i % 5 === 0) {
      // console.log('fizzbuzz')
      console.log('fizzbuzz')
    }// if the number is a multiple of 3
      else if (i % 3 === 0) {
        // return fizz
        console.log('fizz')
      } // if the number is a multiple of 5
      else if (i % 5 === 0) {
        // return buzz
        console.log('buzz');
      } else {
        console.log(i);
      }
  }




  // iterate through each number in the array
  // for (let i of n) {
  //   // if any number multiple by 3 return Fizz
  //   if (i % 3 === 0) {
  //     return 'fizz'
  //   }
  //     // any number multiple by 5 return Buzz
  //     else if (i % 5 === 0) {
  //     return 'buzz'
  //   } else if (i % 3 === 0 && i % 5 === 0) {
  //     return 'fizzbuzz'
  //   }
  // }
}

module.exports = fizzBuzz;
