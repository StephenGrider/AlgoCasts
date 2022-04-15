// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    debugger;
    return str.split('').reduce((reversed, char) => char + reversed, '');
}

reverse('asdf');

module.exports = reverse;

// function reverse(str) {
//     let reversedString = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//        reversedString += str.charAt(i);
//     }
//     return reversedString;
// }