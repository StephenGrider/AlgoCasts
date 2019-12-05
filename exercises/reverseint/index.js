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
  //Solution 1: Got clues to use toString, parseInt, and Math.sign()
  //Didn't know that parsInt would return a positive value for a string like "15-" so I
  //removed the sign from the string initially.
  const sign = Math.sign(n);
  const reversed = (n * sign)
    .toString()
    .split("")
    .reverse()
    .join("");
  return parseInt(reversed * sign);

  //Solution 2: If I knew parseInt returns positive for "15-"
  /*const reversed = n
    .toString()
    .split("")
    .reverse()
    .join("");
  return parseInt(reversed) * Math.sign(n);
  */
}

module.exports = reverseInt;
