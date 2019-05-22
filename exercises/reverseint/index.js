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
  // Method One - convert to string, reverse it. Did not work
  const reversed = n.toString().split('').reverse().join('');
  // Google provide this extra bit
  return Math.sign(n) * parseInt(reversed);
}

module.exports = reverseInt;
