// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const freq = new Map();
  let mostOccurrence = 0;
  let mostOccurredChar = "";

  for (let char of str) {
    let occurrence = 1;

    if (freq.has(char)) {
      occurrence += freq.get(char);
      freq.set(char, occurrence);
    } else {
      freq.set(char, occurrence);
    }

    if (occurrence > mostOccurrence) {
      mostOccurrence = occurrence;
      mostOccurredChar = char;
    }
  }

  return mostOccurredChar;
}

module.exports = maxChar;
