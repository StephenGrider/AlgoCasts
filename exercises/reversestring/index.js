// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    return str.split('').reduce((acc, curr) => curr + acc, '')
}

module.exports = reverse;

// function reverse(str) {
//     var reversedStr = ""
//     for(let i=str.length; i>0; i--){
//         reversedStr += str[i-1]
//     }
//     return reversedStr
// }


// function reverse(str) {
//     var reversedStr = ""
//     for(let character of str){
//         reversedStr = character + reversedStr
//     }
//     return reversedStr
// }