// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev, '');
}

module.exports = reverse;

// function reverse(str) {
//   return str
//     .split('')
//     .reverse()
//     .join('');
// }

// function reverse(str) {
//   let reversed = '';
//
//   for (let character of str) {
//     reversed = character + reversed;
//   }
//
//   return reversed;
// }
