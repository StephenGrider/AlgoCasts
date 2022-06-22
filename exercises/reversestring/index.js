// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    debugger;
    return str.split('').reverse().join('');
}

reverse('asdf');

module.exports = reverse;

// Solution #1
// function reverse(str) {
//     let myArr = str.split('');
//     let reversed = myArr.reverse();
//     let newStr = reversed.join('');
//     return newStr;
// }
// cleaned up and made it into the solution above

// Solution #2
// function reverse(str) {
// let reversed = "";
// 
// for (let character of str) {
//    reversed = character + reversed;
//}
// return reversed;
// }

// function reverse(str) {
//     return str.split('').reduce((reversed, character) =>
//         character + reversed , '');
// }