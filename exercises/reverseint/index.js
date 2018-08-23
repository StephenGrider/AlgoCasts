// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// Solution
// toString and parseInt
// MDN Math.sign(x)
function reverseInt(n) {
  const reversed = n
  .toString()
  .split('')
  .reverse()
  .join('');
  // if statement logic to deal with - numbers
  // if (n < 0) {
    // return parseInt(reversed) * -1;
  }
  // replacing if statement with Math.sign() logic
  return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;
