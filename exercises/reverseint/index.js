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
  // Can also be solved using modulo and divide % /
  let string = n.toString();

  return (
    parseInt(
      string
        .split('')
        .reverse()
        .join('')
    ) * Math.sign(n)
  );
}

module.exports = reverseInt;
