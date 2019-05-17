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
  // stringA = stringA
  //   .replace(/[^\w]/g, "")
  //   .toLowerCase()
  //   .split("");
  // stringB = stringB
  //   .replace(/[^\w]/g, "")
  //   .toLowerCase()
  //   .split("");

  // let makeObj = function(arr) {
  //   let myObj = {};
  //   for (var i in arr) {
  //     myObj[arr[i]] ? myObj[arr[i]]++ : (myObj[arr[i]] = 1);
  //   }
  //   return myObj;
  // };

  // let strObjA = makeObj(stringA);
  // let strObjB = makeObj(stringB);

  // if (Object.keys(strObjA).length !== Object.keys(strObjB).length) {
  //   return false;
  // }

  // for (var i in strObjA) {
  //   if (strObjA[i] !== strObjB[i]) {
  //     return false;
  //   }
  // }
  // return true;

  //solution #2
  stringA = stringA
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
  stringB = stringB
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");

  return stringA === stringB ? true : false;
}

module.exports = anagrams;
