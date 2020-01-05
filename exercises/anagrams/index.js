// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const anagrams = (stringA, stringB) => {
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }

  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }

  return true;
};

const buildCharMap = str => {
  const charMap = {};

  for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
};

module.exports = anagrams;

// with this you are going to want to use regular expression so that you can iterate through all of the characters and ignore any spaces or special characters
// another solution o this is to create a hashmap or a character map and make sure that each one is used, no more and none less
// some edge cases that you would have to consider and could test for would be the length of word or "" and then the number of characters that it contains, and compare the two

// if you are iterating over and array you will use the work "of" in a for loop.
// if you are iterating over and object you will use the word "in" in a for loop
