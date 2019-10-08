// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  return Math.sign(n) === 1 || n === 0
    ? parseInt(n.toString().split('').reduce((acc, cur) => cur + acc), 10)
    : parseInt(`-${n.toString().split('').reduce((acc, cur) => cur + acc)}`, 10);
}

module.exports = reverseInt;
