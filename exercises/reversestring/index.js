// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//1. string → array
//2. reverse array by .reverse() method
//3. join array and turn into string
//4. output


//solution 1
// function reverse(str) {
//     return str.split("").reverse().join("")
// }

//solution 2
// function reverse(str) {
//     let reversedStr = "";
//     for (let character of str) {
//        reversedStr = character + reversedStr
//     }
//     return reversedStr
// }

//solution 3
// "aiueo"
// function reverse(str) {
//     debugger;
//     return str.split('').reduce((rev, char) => char+ rev, "");
// }
// reverse("こんにちは")
// const reverseStr = (str) => {
//     return str.split("").reduce((prev, char) => {
//         return char + prev
//     },"")
// }

module.exports = reverseStr;



