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

const steps = n => {
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
};

module.exports = steps;

//--------NOTES------------//

//remember that in each one of the steps that you have to inculde the spaces or the test will fail. For step 3 you will see that in each step there are 3 characters in each step even though some of them are spaces
//you are going to want to iterate through the rows and the columns:
//   _____________________________
//  |_r0/c0_#_|_r0/c1___|_r0/c2___|
//  |_r1/c0_#_|_r1/c1_#_|_r1/c2___|
//  |_r2/c0_#_|_r2/c1_#_|_r2/c2_#_|

// if the row and the column are the same then you will add in a '#'. If the column is less than the row then also add a '#'. Else add in a space to the stair
