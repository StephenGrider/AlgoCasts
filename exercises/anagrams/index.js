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
  const cleanStringA = cleanString(stringA);
  const cleanStringB = cleanString(stringB);

  const charMapA = charMap(cleanStringA);
  const charMapB = charMap(cleanStringB);

  //check if the objects have the same property and values
  //Handle edge case when there are more properties in one than the other
  if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
    return false;
  }

  for (let key in charMapA) {
    if (charMapA[key] !== charMapB[key]) {
      return false;
    }
  }
  return true;
}

function cleanString(string) {
  //Remove punctuations, spaces, and lower case all letters
  return string.replace(/[^\w]/g, "").toLowerCase();
}

function charMap(string) {
  const map = string.split("").reduce((map, char) => {
    //map[char] = map[char] ? (map[char] += 1) : 1;
    map[char] = (map[char] && map[char] + 1) || 1;
    return map;
  }, {});
  return map;

  //Solution 2: Use the sort helper method
  //return cleanString(stringA) === cleanString(stringB);
}

/*
function cleanString(string) {
  //Remove punctuations, spaces, and lower case all letters
  return string
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
}
*/

module.exports = anagrams;
