// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"


// for this problem, we need to first iterate through the string and create a hashmap of the letters and their frequency.
function maxChar(str) {
  let max = 0;
  let maxChar = '';
  const charMap = {};
  for (let char of str)
    if (charMap[char]) {
      charMap[char]++
    } else {
      charMap[char] = 1
    }
  // once the hashmap has been created, we iterate through it and assign the maximum value to the highest current value, and save the character associated with that highest current value to maxChar. in the end, the highest maxChar gets returned.
  for (charKey in charMap) {
    if (charMap[charKey] > max) {
      max = charMap[charKey]
      maxChar = charKey;
    }
  }
  return maxChar
}

module.exports = maxChar;
