// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Solution 1 (with reverse helper)
// See MDN Array.prototype.reverse() documentation
// function reverse(str) {
//   const arr = str.split('');
//   arr.reverse();
//   return arr.join('');
// }
// module.exports = reverse;

// Solution 1 (clean)
// function reverse(str) {
//   return str
//     .split('')
//     .reverse()
//     .join('');
// }
// module.exports = reverse;

// Solution 2 (with for of char)
// function reverse(str) {
//   let reversed = '';
//   for (let character of str) {
//     reversed = character + reversed;
//   }
//   return reversed;
// }
// module.exports = reverse;

// Solution 3 () 
function reverse(str) {
  return str.split('').reduce((reversed, character) => {
    return character + reversed;
  }, '');
}
module.exports = reverse;