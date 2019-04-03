// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    return str.split('').reduce((rev, char) => char + rev, '')
}

module.exports = reverse;

// function reverse(str) {
//     return str.split('')
//     .reverse()
//     .join('')
// }

// function reverse(str) {
//     let revStr = '';
//     for(let char of str){
//         revStr = char + revStr;
//     }
//     return revStr;
// }
