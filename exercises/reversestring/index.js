// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// 1st solution - with array.reverse()
// function reverse(str) {
//   let word = str.split("").reverse().join("");
//   return word;
// }

//2nd solution - with for loop
// function reverse(str) {
//   let word = "";
//   for (let i = 0; i < str.length; i++) {
//     word = str[i] + word;
//   }
//   return word;
// }

// 3rd solution - with for improoved sintax ( using "character" insted of i)
// function reverse(str) {
//   let word = "";
//   for (let character of str) {
//     word = character + word;
//   }
//   return word;
// }

function reverse(str) {
  return str.split("").reduce((rev, el) => el + rev, "");
}

module.exports = reverse;
