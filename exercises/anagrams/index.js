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
  // this helper function creates a lowercase, character-only hash map of a string.
  const characterMap = (str) => {
    const map = {}
    for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
      map[char] = map[char] + 1 || 1
    }
    return map;
  }

  // assigning the result of the mapping function to a variable for each map.
  const mapA = characterMap(stringA);
  const mapB = characterMap(stringB);

  // if the maps are different lengths, we don't even need to iterate through to check them.
  if (Object.keys(mapA).length !== Object.keys(mapB).length) {
    return false;
  }

  // otherwise, if we compare the value of one key against the key in the other map and the total of instances is different, we can stop iterating. The answer must be false.
  for (let char in mapA) {
    if (mapA[char] !== mapB[char]) {
      return false;
    }
  }
  return true;
}

module.exports = anagrams;
