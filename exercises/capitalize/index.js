// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  // let charArr = str.split(' ');
  // let newArr = [];
  // for (char of charArr) {
  //   newArr.push(char[0].toUpperCase() + char.slice(1))
  // }
  // return newArr.join(' ');

  let newString = str[0].toUpperCase(); 
  
  for (let i = 1; i < str.length; i++) {
    if (str[i-1] !== ' ') {
      newString = newString + str[i];
    } else if (str[i-1] === ' ') {
      newString = newString + str[i].toUpperCase();
    }
  }

  return newString;
}

module.exports = capitalize;
