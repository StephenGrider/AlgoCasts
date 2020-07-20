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
  //   stepsMySolution(n);
  //   stepsNestedLoop(n);
  stepsRecursion(n);
}

function stepsMySolution(n) {
  for (let i = 1; i <= n; i++) {
    let currentStep =
      new Array(i + 1).join("#") + new Array(n - i + 1).join(" ");
    console.log(currentStep);
  }
}

function stepsNestedLoop(n) {
  for (let row = 0; row < n; row++) {
    let stair = "";

    for (let column = 0; column < n; column++) {
      if (column <= row) {
        stair += "#";
      } else {
        stair += " ";
      }
    }

    console.log(stair);
  }
}

function stepsRecursion(n, row = 0, stair = "") {
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return stepsRecursion(n, row + 1);
  }

  stepsRecursion(n, row, stair + (stair.length <= row ? "#" : " "));
}

module.exports = steps;
