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
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(string){
  return string.replace(/[^\w]/g,"").toLowerCase().split('').sort().join('');
}
 /* Solution 1
 function anagrams(stringA, stringB) {
  let objA = getCharMap(stringA);
  let objB = getCharMap(stringB);

  if (Object.keys(objA).length !== Object.keys(objB).length) return false;

  for (prop in objA){
    if (objA[prop] !== objB[prop]) return false;
  }
  return true;
}

function getCharMap (string){
  let array = string.replace(/[^\w]/g,"").toLowerCase().split('');
  return array.reduce(function(obj, val){
    if (obj[val]){
      obj[val] ++;
    }else{
      obj[val] = 1;
    }
    return obj;
  },{})
 
}
 */

module.exports = anagrams;
