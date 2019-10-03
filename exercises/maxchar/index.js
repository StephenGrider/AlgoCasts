// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

let str = "apple";

//count char occurences
//create objec to tally char and count
//loop through the string
//each char should represent a key in the object and the value should represent tally
//if key exists then add one to tally
//otherwise create key and set value to 1
//progress to next char in loop

//create variable to hold max count initalize to null
//create variable to hold max char initialize to null
//loop through object
//if value of current key is greater than max count
//set value of max count to value of current key
// set value of max char to current key
//move to next iteration in object loop

//return the max char

function maxChar(str) {
  let tallyObject = {};
  for (let i = 0; i < str.length; i++) {
    if (tallyObject[str[i]]) {
      tallyObject[str[i]] += 1;
    } else {
      tallyObject[str[i]] = 1;
    }
  }
  //O(n) time where n is length of string
  let maxCount = null;
  let maxChar = null;
  for (let key in tallyObject) {
    if (tallyObject[key] > maxCount) {
      maxCount = tallyObject[key];
      maxChar = key;
    }
  }
  return maxChar;
}

console.log(maxChar(str));

module.exports = maxChar;
