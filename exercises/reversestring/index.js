// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split("").reduce((rev, char) => char + rev, "");
}

console.log(reverse("abcd"));

module.exports = reverse;

// SOLUTION 1
// function reverse(str) {
//   return str.split("").reverse().join("");
// }

// SOLUTION 2
// function reverse(str) {
//     let reversed = "";
//     // not going to use the classic for loop
//     for (let character of str) {
//       reversed = character + reversed;
//     }
//     return reversed;
//   }
