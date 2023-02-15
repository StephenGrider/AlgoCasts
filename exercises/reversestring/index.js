
function reverse(str) {
  return str.split("").reduce((rev, char) => char + rev, "");
}

// SOLUTION 1
// function reverse(str) {
//     return str.split("").reverse().join("");

// split turns the string into an array, reversed reverses the items in the array, Join converts the array back into a string.
// }


// SOLUTION 2
// function reverse(str) {
//     let reversed = "";
//     for (let character of str) {
//       reversed = character + reversed;
//     }
//     return reversed;
// declare an empty string variable "reversed", use a for loop to loop through the characters of the string, add it to the empty string.

// question : does a for loop store the last iterated item first?
// }

module.exports = reverse;