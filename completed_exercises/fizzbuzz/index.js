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
  for (let i = 1; i <= n; i++) {
    // Is the number a multiple of 3 and 5?
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    } else if (i % 3 === 0) {
      // Is the number a multiple of 3?
      console.log('fizz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
}



// const nums3 = Array.from(new Array(101).keys()).splice(1)
// console.log('nums3: ', nums3)

// function fizzBuzz(arr) {
//   let result = []
//   arr.map(n => {
//     if (n % 3 === 0) {
//       result.push('fizz');
//     } else if (n % 5 === 0) {
//       result.push('buzz');
//     } else {
//       result.push(n);
//     }
//   })
//   return result;
// }

// console.log('fizzBuzz: ', fizzBuzz(nums3))

// const fizzBuzz = (n) => {
//   for (let i = 0; i < n; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log('fizzbuzz')
//     } else if (i % 3 === 0) {
//       console.log('fizz')
//     } else if (i % 5 === 0) {
//       console.log('buzz')
//     } else {
//       console.log(i)
//     }
//   }
// }

module.exports = fizzBuzz;
