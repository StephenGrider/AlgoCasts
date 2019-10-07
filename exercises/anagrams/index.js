// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//use regex to remove any punctuation
//check that lengths of inputs are equal
//lowercase each input
//create object tally for input A
//create object tally for input B
//check if obj[key] is equal in both objects

function anagrams(stringA, stringB) {
  let inputA = stringA.replace(/[^\w]/g, "").toLowerCase();
  let inputB = stringB
    .replace(/[\s.,/\#!S%\^&\*;:{}=\-_`~()]/g, "")
    .toLowerCase();
  if (inputA.length !== inputB.length) {
    return false;
  }
  console.log(inputA);
  console.log(inputB);
  let objectA = {};
  let objectB = {};

  for (let i = 0; i < inputA.length; i++) {
    if (!objectA[inputA[i]]) {
      objectA[inputA[i]] = 1;
    } else {
      objectA[inputA[i]] += 1;
    }
  }

  //O(a) time complexity

  for (let i = 0; i < inputB.length; i++) {
    if (!objectB[inputB[i]]) {
      objectB[inputB[i]] = 1;
    } else {
      objectB[inputB[i]] += 1;
    }
  }

  //O(b) time complexity

  for (let key in objectA) {
    if (objectA[key] !== objectB[key]) {
      return false;
    }
  }
  return true;
}

//O(a) time complexity

console.log(anagrams("rail Safety", "fairy Tales"));

//O(b + 2a) which is O(b + a) time complexity, O(ab) space complexity?

module.exports = anagrams;
