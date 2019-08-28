// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

const reverse = str => {
  let splitString = str.split("");
  let reverseString = splitString.reverse();
  let reJoin = reverseString.join("");

  return reJoin;
};

module.exports = reverse;

//----------------------//
// this is another way to solve the problem

// const reverse = str => {
//   let arr = str.split("");
//   arr.reverse();

//   return arr.join("");
// };

// module.exports = reverse;

// here you have to keep in mind the the .reverse() is a method that belongs to an Array
// so what is happening is that when we split the word then we are reversing it and the rejoing the aray back into the string

// now for  solution without using .reverse()

// const reverse = str => {
//   let reversed = '';

//   for(let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed;
// }
