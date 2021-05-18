// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  // remove none chars, convert to object and compare both objects. 
  // let charA = stringA.replace(/[^\w]/g, '').toLowerCase(); 
  // let charB = stringB.replace(/[^\w]/g, '').toLowerCase(); 
  // if(charA.length !== charB.length){ return false}
  // let charAMap = {}; 
  // let charBMap = {}; 
  // charA.split('').forEach(el => {
  //   charAMap[el] = charAMap[el] + 1 || 1
  // })
  // charB.split('').forEach(el => {
  //   charBMap[el] = charBMap[el] + 1 || 1
  // })
  // for (let char in charAMap) {
  //   if (charAMap[char] !== charBMap[char]) {
  //     return false; 
  //   }
  // }
  // return true;

  // use helper function 
  let charMapA = charConvert(stringA);
  let charMapB = charConvert(stringB);

  if (Object.keys(charMapA).length !== Object.keys(charMapB).length) { return false}
  
  for(let char in charMapA) {
    if(charMapA[char] !== charMapB[char]) {
      return false;
    }
  }
  return true;
}

function charConvert(str) {
  let charMap = {};
  str.replace(/[^\w]/g, '').toLowerCase().split('').forEach(el => {
    charMap[el] = charMap[el] + 1 || 1;
  })
  return charMap;
}

// anagrams("Whoa! Hi!", "Hi! Whoa!")
module.exports = anagrams;
