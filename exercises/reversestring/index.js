// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


// Solution 1: Built-in reverse method in JS
// function reverse(str) {
//     return str.split("").reverse().join("")
// }

// Solution 2: Adding characters to string in reverse order
// function reverse(str) {
//     let reversed = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i]
//     }
//     return reversed
// }

// Solution 2 - Alternate for-loop syntax:
// function reverse(str) {
//     let reversed = '';
//     for (let character of str) {
//         reversed = character + reversed
//     }
//     return reversed
// }

// Solution 3: Reversing using reduce
function reverse(str) {
    const reducer = (reversed, character) => character + reversed;
    return str.split("").reduce(reducer, "")
}

module.exports = reverse;
