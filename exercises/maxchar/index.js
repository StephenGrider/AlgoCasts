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
  const entries = Object.entries(charsObj);
  const sorted = entries.sort((a, b) => a[1] + b[1]);
  return sorted[0][0];
}

module.exports = maxChar;
