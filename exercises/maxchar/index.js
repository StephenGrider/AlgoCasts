// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar (str) {
  const charactersMap = {};
  for (const character of str) {
    charactersMap[character] = charactersMap[character] + 1 || 1;
  }

  const [[mostUsedCharacter]] = Object.entries(charactersMap)
    .sort(([charA, charAUsage], [charB, charBUsage]) => {
      if (charAUsage > charBUsage) return -1;
      if (charAUsage < charBUsage) return 1;
      return 0;
    });

  return mostUsedCharacter;
}

module.exports = maxChar;