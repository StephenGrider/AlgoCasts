// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const chars = {}

  for (let char of str ) {
    if (!chars[char]) {
      chars[char] = 1;
    } else {
      chars[char]++;
      }
  }

  console.log(chars);

}

module.exports = maxChar;
