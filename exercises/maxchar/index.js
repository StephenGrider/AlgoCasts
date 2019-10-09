// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charsObj = {};
  const charsArr = str.split('');
  charsArr.forEach((element) => {
    charsObj[element] ? charsObj[element] += 1 : charsObj[element] = 1;
  });

  // This is how you do it by creating an array of charsObj entries, then
  // iterating through that array to find the high value

  const entries = Object.entries(charsObj);
  const sorted = entries.sort((a, b) => a[1] + b[1]);
  return sorted[0][0];

  // This solution iterates through the entire charsObj object
  // ESlint gave me this warning:
  // for..in loops iterate over the entire prototype chain, which
  // is virtually never what you want. Use Object.{keys,values,entries},
  // and iterate over the resulting array.

  // let highNum = 0;
  // let mostUsedChar = '';
  // for (let char in charsObj) {
  //   if (charsObj[char] > highNum) {
  //     highNum = charsObj[char];
  //     mostUsedChar = char;
  //   } else {
  //     continue;
  //   }
  // } return mostUsedChar;
}

module.exports = maxChar;
