// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // #1 Simple solution
  //   let strArr = str.split("").reverse().join("");
  // #2 Solution without relying on reverse method
  // Does not work on leet code because it wants the original array mutated instead of returning a new reversed array
  //   let strArr = [];
  //   str.split("").forEach((char) => strArr.unshift(char));
  //   return strArr.join("");
  //#3 solution without methods. Again, not going to work on leet code.
  //   let reversedStr = "";
  //   for (let char of str) {
  //     reversedStr = char + reversedStr;
  //   }
  //   return reversedStr;
  // #4 Using reduce method, again won't work on leet code.
  return str.split("").reduce((rev, char) => char + rev, "");
}

reverse("asdf");

module.exports = reverse;
