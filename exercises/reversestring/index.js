// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//apple
//a + ""
//p + "a"
//p + "pa"
//l + "lppa"


function reverse(str) {
  var newString = "";
  
  for (var i = 0; i < str.length; i++) {
    newString = str[i] + newString;
  }

  return newString;
}

module.exports = reverse;
