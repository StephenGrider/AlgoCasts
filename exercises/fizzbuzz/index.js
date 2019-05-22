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
    for (var i = 1; i <= n; i++)
    {
        // Using 'modulo' operator, check for multiple of 3 & 5 first
        if(i % 3 === 0 && i % 5 === 0)
        {
            console.log('fizzbuzz');
        }
        // Check for multiple of 3 (could be 5, but I chose 3)
        else if (i % 3 === 0)
        {
            console.log('fizz');
        }
        // Check for multiple of 5 (could be 3, but I chose 5)
        else if (i % 5 === 0)
        {
            console.log('buzz');
        }
        else
        {
            console.log(i);
        }
    }
    
}

module.exports = fizzBuzz;
