// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// function reverseInt(n) {
//   const rev = parseInt(n.toString().split("").reverse().join(""), 10);
//   if (n < 0) {
//     return rev * -1;
//   }
//   return rev;
// }

function reverseInt(n) {
  const rev = parseInt(n.toString().split("").reverse().join(""), 10);

  return rev * Math.sign(n);
}

module.exports = reverseInt;
