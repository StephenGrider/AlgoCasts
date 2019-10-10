// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt (n) {
  const reversedNumberAsAString = String(n).split('').reverse().join('');
  return Math.sign(n) * parseInt(reversedNumberAsAString);
}

module.exports = reverseInt;