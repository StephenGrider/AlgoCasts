// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return reverseUsingArrayHelper(str);
}

/**
 * Reverse the string using stack.
 *
 * @param {*} str
 * @returns
 */
function reverseMySolution(str) {
  const stack = [];
  for (let char of str) {
    stack.push(char);
  }

  let reversedString = "";
  while (stack.length) {
    reversedString += stack.pop();
  }

  return reversedString;
}

/**
 * Provided solution #1.
 *
 * @param {*} str
 * @returns
 */
function reverseUsingReverse(str) {
  return str.split("").reverse().join("");
}

/**
 * Provided solution #2.
 *
 * This is similar to my solution, but more efficient: it requires only
 * 1 for-loop, instead of 2.
 *
 * @param {*} str
 * @returns
 */
function reverseUsingForLoop(str) {
  let reversed = "";

  for (let character of str) {
    reversed = character + reversed;
  }

  return reversed;
}

/**
 * Provided solution #3.
 *
 * @param {*} str
 * @returns
 */
function reverseUsingArrayHelper(str) {
  return str
    .split("")
    .reduce((reversed, current) => `${current}${reversed}`, "");
}

module.exports = reverse;
