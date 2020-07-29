// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  // store strings into an object
  // string_object = {}
  // // iterate through string to get most common character
  // for (let char of str) {
  //   string_object[char] = string_object[char] + 1 || 1
  // }
  // // output most common used character

  const charMap = {}

  for (let i of str) {
    if (charMap[i]){
      charMap[i] + 1
    } else {
      charMap[i] = 1
    }
  }

  console.log(charMap)



}

module.exports = maxChar;
