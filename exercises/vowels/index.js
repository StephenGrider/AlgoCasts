// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  let matches = str.match(/[aeiou]/gi);
  return (matches) ? matches.length : 0;
 
  /*let numOfVowels = 0;
  //have a counter to track number of vowels in the string
  //loop through the characters and check whether they are a vowel. 
  //if they are then we increment the counter
  for (let char of str.toLowerCase()){
    if (['a', 'e', 'i', 'o', 'u'].includes(char)){
      numOfVowels+=1;
    }
  }
  return numOfVowels;
  */
}

module.exports = vowels;
