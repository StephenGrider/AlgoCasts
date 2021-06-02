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
    // for loop n
    for(let i = 1; i <= n; i++) {

        // if i is divisible by 15 with no leftovers
        if(i % 15 === 0) {
            // return fizzbuzz
            console.log('fizzbuzz');

        // if i is divisible by 3 with no leftovers
        }else if(i % 3 === 0) {
            // return fizz
            console.log('fizz');

        // if i is divisible by 3 with no leftovers
        }else if(i % 5 === 0) {
            // return fizz
            console.log('buzz');
            
        // if i is not divisible by 3, 5 nor 15
        }else{
            // return the number
            console.log(i);
        }
    }
}

module.exports = fizzBuzz;
