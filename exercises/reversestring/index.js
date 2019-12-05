// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  //2019 solutions
  /* Solution 1: Use the forEach helper method to loop through each character and create the
                 a reversed copy of the input string
  let reversed = '';
  
  str.split('').forEach(char => {
    reversed = char + reversed;
  })

  return reversed; 
  */

  /* Solution 2: Use the reduce method
  let reversed = str.split("").reduce((reversed, currChar) => {
    return currChar + reversed;
  }, "");
  
  return reversed;
  */

  // Solution 3: simplify reduce even more
  return str.split("").reduce((reversed, char) => char + reversed, "");

  //Solution 4: Use the reverse method of an array
  /*return str
    .split("")
    .reverse()
    .join("");
    */
}

module.exports = reverse;
