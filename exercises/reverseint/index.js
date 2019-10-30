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
  let sign = Math.sign(n); //track if pos or neg
  let string = n.toString();
  let output = "";
  if (sign === 1) {
    for (let i = string.length - 1; i >= 0; i--) {
      output += string[i];
    }
    return parseInt(output);
    //must explicitly switch to int
  } else {
    for (let i = string.length - 1; i > 0; i--) {
      //dont concat index 0 since its a neg sign
      output += string[i];
    }
    return output * sign;
    //multiply by sign which will be -1
    //mult changes from string to int
  }
}

console.log(reverseInt(-91));

//O(n) runtime O(n) space complexity

module.exports = reverseInt;
