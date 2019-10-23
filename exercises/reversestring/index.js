// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// turn the string into an array
// reverse the array "array.prototype.reverse()"
// restringify the array

function reverse(string) {
  const array = string.split("");
  array.reverse();
  return array.join("");
}

// shorter solution
function reverse(string) {
  return string
    .split("")
    .reverse()
    .join("");
}

// alternative solution without the .reverse() function, uses a for loop

// create an empty array string called 'reversed'
// for each character in the provided string
// take the character and add it to the start of the 'reversed'
// return the variable 'reversed'

// try to avoid using the for loop syntax because it introduces a  lot of room for error
// use for/of syntax instead

//for / of syntax
// for (**temporary variable** of **iterable object**) {
//
// }

function reverse(string) {
  let reversed = "";
  for (let character of string) {
    reversed = character + reversed;
  }
  return reversed;
}

// uses the reduce helper method

// reduce takes in the all the values in an array and condenses them down to one single value
// reduce takes in two arguements, an arrow function and an initial value 
// everytime reduce runs, it takes the intial value and passes it into the arrow function as the first argument 
// the value that is returned from the inner function {} will be used as the starting arg for the next successive run of the function.
// the function runs one time for each value in the array. 

function reverse(string) {
  return string.split("").reduce((reversed, character) => {
    return character + reversed;
  }, '');
}

//one liner with ES6 implicit return 

const reverse = (string) => (string.split('').reduce((rev, char) => char + rev, ''))

module.exports = reverse;

// REACTO

// R - *Repeat* the question (make sure you understand the question)
// E - Give *examples* (given these parameters what output do you expect)
// A - Describe your *approaches* (help the interviewer understand the path and you can get a little feedback from interviewer's response)
// C - *Code*... psudocode from higher level (Breath first coding from CTCI Book),
// T - *Test* your code, Run some of the examples through the code, use another color to show the changing variables, show that you can find your own problems
// O - *Optimization* and run time, see if you can refactor **Big O**

//Extra tips - leave space to add and remove code because it isnt like a text editor, star things that you are not sure about
