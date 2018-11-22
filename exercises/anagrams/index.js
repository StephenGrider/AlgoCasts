// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const charMapper = (string) => {
    let compareObj = {};
    for(const char of string) {
      compareObj[char] = compareObj[char] + 1 || 1
    }
    return compareObj
  }
  const string1 = stringA.replace(/[^\w]/g, "").toLowerCase();
  const string2 = stringB.replace(/[^\w]/g, "").toLowerCase();
  const charMap1 = charMapper(string1);
  const charMap2 = charMapper(string2);
  if (Object.keys(charMap1).length !== Object.keys(charMap2).length) {
    return false
  } 
  return string1.split('').every((char) => charMap1[char] === charMap2[char])
}

module.exports = anagrams;
