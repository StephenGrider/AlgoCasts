// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Loop through string characters and returns reverse_string
// function reverse(str) {
//   let reversed = "";
//
//   for (let character of str){
//     reversed = character + reversed
//     debugger
//   }
//
//   return reversed
// }


//Basic Built-In Reverse Function
// function reverse(str) {
//   debugger;
//   return str.split('').reverse().join('')
// }

// ES5 syntax
// function reverse(str) {
//   return str.split('').reduce((rev, char) =>
//     char + rev
//   , '')
// }
//
// uncomment to execute code and see on terminal / console
// reverse('abcdef')
module.exports = reverse;
