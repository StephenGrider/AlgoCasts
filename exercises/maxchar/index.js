// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  // Create a hash to store the amount of times that each character is found in a string.
  const charMap = str.split("").reduce((charMap, c) => {
    //charMap[c] = charMap[c] ? charMap[c] + 1 : 1;
    charMap[c] = charMap[c] + 1 || 1;
    return charMap;
  }, {});

  //find the max value in the has properties and return its key value
  let max = 0;
  let maxChar = "";
  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}

module.exports = maxChar;
