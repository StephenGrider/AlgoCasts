// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  let level = 1;
  while (level <= n) {
    let column = 1;
    let output = "";
    let tally = 1;
    while (column <= n) {
      if (tally <= level) {
        output += "#";
      } else {
        output += " ";
      }
      tally++;
      column++;
    }
    console.log(output);

    level++;
  }
}

console.log(steps(4));

module.exports = steps;
