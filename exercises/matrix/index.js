// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

/*

 - Create an empty array 
 - Create a counter variable, starting at 1
 - As long as (start col <= end col) AND (start row <= end row)
    -- loop from start col to end col
        -- At results[start_row][i] assign counter var
        -- increment counter
    -- increment start row
    -- loop from start row to end row
        -- At results[i][end_column] assign counter variable
        -- increment counter
    -- Decrement end row
*/

//clockwise

function matrix(n) {
    //create an array of arrays
    const results = [];
    for (let i = 0; i < n; i++) {
        results.push([]);
    }
    //create vars for counter and your start and end col and rows
    let counter = 1;
    let startCol = 0;
    let startRow = 0;
    let endCol = n - 1;
    let endRow = n - 1;

    while(startCol <= endCol && startRow <= endRow) { //while col/row is less than n-1:
        // Responsible for top row
        for (let i = startCol; i <= endCol; i++) {
            results[startRow][i] = counter;
            counter++;
        } // Here we are starting on the column and iterating over the columns in the start row to insert the counter at the proper place in the row. We then increment the counter inside the for loop and then outside of the for loop we increment the startRow since we have placed our counters in the proper place in the initial start row. This will place numbers in a row across the top of the matrix. 
        startRow++;
        //right Col
        for (let i = startRow; i <= endRow; i++) {
            results[i][endCol] = counter;
            counter++;
        } // Here we are starting on the incremented startRow from the previous iteration of the loop. We loop over to the endRow and assign the new counter to proper indexes on the results array (first index indicates row, second index indicates column). Let's increment the counter in the for loop and then outside the for loop let's decrement the endCol (since we are starting on the right in the next loop and going to the left). This places numbers on the rightmost available column. 
        endCol--;

        //Bottom Row
        for (let i = endCol; i >= startCol; i--) {
            results[endRow][i] = counter;
            counter++;
        } // this loops through the columns on the bottom row and inserts the proper counter. We decrement the endRow at the end since we need to go up a row for the next for loop
        endRow--;

        //start column
        for (let i = endRow; i >= startRow; i--) {
            results[i][startCol] = counter;
            counter++;
        } // this loops through the rows on any given column and will place the proper counter in the ith row at the startCol. After loop completes, increase the startCol. 
        startCol++;

    }
    console.log(results);
    return results

}
//counter clockwise :) 

function matrixCounterClockWise(n) {
    //declare array of arrays;
    let results = [];
    for( let i = 0; i < n; i++) {
        results.push([]);
    }
    //declare vars
    let counter = 1; //the actual start value of the spiral
    startRow = 0;
    endRow = n - 1; //zero based so n - 1;
    startCol = 0;
    endCol = n - 1; //zero-based so n - 1 is range;
    
    while(startRow <= endRow && startCol <= endCol){
        //left col
        for(let i = startRow; i <= endRow; i++) {
            results[i][startCol] = counter;
            counter++;
        }
        startCol++;

        //bottom row
        for(let i = startCol; i <= endCol; i++) {
            results[endRow][i] = counter;
            counter++
        }
        endRow--;

        //last col
        for (let i = endRow; i >= startRow; i--) {
            results[i][endCol] = counter;
            counter++
        }
        endCol--;

        //top row
        for (let i = endCol; i >= startCol; i--) {
            results[startRow][i] = counter;
            counter++;
        }
        startRow++;
    }
    console.log(results);

}

module.exports = matrix;
matrixCounterClockWise(5);