// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  return capitalizeProvidedSolution(str);
}

/**
 * This is the solution I wrote, and the 1st provided solution is similar
 * to this, but it was written as multi-line solution.
 *
 * @param {*} str
 * @returns
 */
function capitalizeMySolution(str) {
  return str
    .split(" ")
    .map(
      (word) =>
        word[0].toUpperCase() + (word.length > 1 ? word.substring(1) : "")
    )
    .join(" ");
}

/**
 * This is the 2nd provided solution.
 *
 * @param {*} str
 * @returns
 */
function capitalizeProvidedSolution(str) {
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;
}

module.exports = capitalize;
