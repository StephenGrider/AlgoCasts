// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// Solution 1 - character mapping with helper function
// RegExp and toLowerCase
// something.replace(/[^\w]/g, "").toLowerCase();
function anagrams(stringA, stringB) {
  // build character maps A and B
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);

  // compare key length of both character maps - false case #1
  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  } 
  // iterate through character maps
  for (let char in aCharMap) {
    //check characters with in each map - false case #2
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }
  // Lastly - if both above checks pass, assume and return true
  return true;
}
// Helper Function to build character map
function buildCharMap (str) {
  const charMap = {};

  for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
}

// Solution 2 - array sort
function anagrams(stringA, stringB) {
  // compare strings with strict equals and return T or F
  return cleanString(stringA) === cleanString(stringB);
}

// Helper function to create clean strings
function cleanString (str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}


module.exports = anagrams;
