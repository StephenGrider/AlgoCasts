// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  /* // Method One - Loop around
  var result = "";
  for (var i = str.length - 1; i >= 0; i--){
    result += str[i]
  }
  return result;
  */

  /* // Method Two - built in JS functions (needed Google)
  return str.split("").reverse().join("");
 */

  // Method Three - Recursion (Google ALL THE WAY)
  if (str === "") // This is the terminal case that will end the recursion
    return "";
  
  else
    return reverse(str.substr(1)) + str.charAt(0);
}

module.exports = reverse;
