// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//iterative
// const pyramid = (n) => {
//     //very similar to steps solution
//     let midpoint = Math.floor((2 * n - 1)/2);
//     //loop through rows
//     for (let row = 0; row < n; row++) {
//         //for each row we create, create an empty string
//         let level = "";
//         //loop through columns
//         //number of columns == 2 * n - 1;
//         for (let column = 0; column < (2 * n - 1); column++) {
//             // if the difference of the midpoint and the row AND the sum of the midpoint and row is === the column we are to add a #
//             if(midpoint - row <= column && midpoint + row >= column) {
//                 //current column is within these bounds;
//                 level += "#";
//             }
//             else {
//                 //otherwise add a space
//                 level += ' ';
//             }
//         }
//         console.log(level);
//     }
// }
//initiate a func where row = 0 and you have an empty string
const pyramid = (n, row = 0, level="") => {
    //assign length to a var
    let length = 2 * n - 1;
    //if row is equal to n you are done with recursion.
    if(row === n) {
        return;
    } 
    //if length is equal to length of string, start a new string with a new function call with 1 added to row
    if(level.length === length) {
        console.log(level);
        return pyramid(n, row + 1);
    }

    //calc midpoint
    let midpoint = Math.floor(length/2); //gives index
    //instantiate var for the char that will be added to string
    let add;
    //
    if (midpoint - row <= level.length && midpoint  + row >= level.length) {
        add = "#";
    } else {
        add = " ";
    }
    //call pyramid with string + added char.
    pyramid(n, row, level + add);
}

module.exports = pyramid;


pyramid(6)