// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const elements = {};
  let max = 0;
  let elementMax = "";
  //  for ( let char of str ) {
  //    if (!elements[char]) {
  //     elements[char] = 1
  //    } else {elements[char]++}

  //  }
  for (let char of str) {
    // char substitui o elemento "i" e deixa mais simples e com menos chances de erros ortograficos
    // o "of" é usado quando estamos iterando com uma string ou array
    elements[char] = elements[char] + 1 || 1;
  }

  for (let char in elements) {
    // o "in" é usado quando estamos iterando com um objeto
    if (elements[char] > max) {
      max = elements[char];
      elementMax = char;
    }
  }
  return elementMax;
}

module.exports = maxChar;
