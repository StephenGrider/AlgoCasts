// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   let reversedString = '';
//   for (let i = str.length; i >= 0; i--) {
//     reversedString += str.charAt(i);
//   }
//   return reversedString;
// }

// function reverse(str) {
//   return str
//     .split('')
//     .reverse()
//     .join('');
// }

// function reverse(str) {
//   let reversedString = '';
//   for (let character of str) {
//     reversedString = character + reversedString;
//   }
//   return reversedString;
// }

function reverse(str) {
  return str.split('').reduce((reversed, letter) => letter + reversed, '');
}

module.exports = reverse;
