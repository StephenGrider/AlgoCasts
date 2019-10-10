// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar (str) {
  const charactersUsageCount = str.split('').reduce((charactersUsageCount, character) => {
    if (!charactersUsageCount[character]) charactersUsageCount[character] = 1;
    else charactersUsageCount[character]++;
    return charactersUsageCount;
  }, {});

  const [[mostUsedCharacter]] = Object.entries(charactersUsageCount)
    .sort(([charA, charAUsage], [charB, charBUsage]) => {
      if (charAUsage > charBUsage) return -1;
      if (charAUsage < charBUsage) return 1;
      return 0;
    });

  return mostUsedCharacter;
}

module.exports = maxChar;