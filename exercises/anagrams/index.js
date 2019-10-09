// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams (stringA, stringB) {
  const stringALetters = getLettersArray(stringA);
  const stringBLetters = getLettersArray(stringB);

  const stringAOccurenceCountObject = getOccurenceCountObject(stringALetters);
  const stringBOccurenceCountObject = getOccurenceCountObject(stringBLetters);

  const allLettersFromAAreUsedTheSameAsB = stringIsPartialOfAnotherString(stringAOccurenceCountObject, stringBOccurenceCountObject);
  const allLettersFromABreUsedTheSameAsA = stringIsPartialOfAnotherString(stringBOccurenceCountObject, stringAOccurenceCountObject);

  return allLettersFromAAreUsedTheSameAsB && allLettersFromABreUsedTheSameAsA;
}

function stringIsPartialOfAnotherString (stringAOccurenceObject, stringBOccurenceObject) {
  return Object.entries(stringAOccurenceObject).every(([letter, count]) => stringBOccurenceObject[letter] === count);
}


function getOccurenceCountObject (lettersArray) {
  return lettersArray.reduce((occurenceCountObject, letter) => {
    if (occurenceCountObject[letter]) occurenceCountObject[letter]++;
    else occurenceCountObject[letter] = 1;

    return occurenceCountObject;
  }, {});
}

function getLettersArray (string) {
  return string.split('').filter(char => /[a-zA-Z]/.test(char));
}

module.exports = anagrams;