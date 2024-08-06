var matrixA = [[1, 2], 
               [3, 4]];
var matrixB = [[5, 6], [7, 8]];

var addMatrices = function (matrixA, matrixB) {
    if (!matrixA || !matrixB) {
        console.error("Both matrices must be defined.");
        return null;
    }

    var result = [];
    for (var i = 0; i < matrixA.length; i++) {
        var row = [];
        for (var j = 0; j < matrixA[i].length; j++) {
            row.push(matrixA[i][j] + matrixB[i][j]);
        }
        result.push(row);
    }
    console.log(result);
    return result;
};

function multiplyMatrices(matrixA, matrixB) {
    let result = [];

    for (let i = 0; i < matrixA.length; i++) {
        let row = [];
        console.log(`Processing row ${i} of matrixA: ${matrixA[i]}`);
        
        for (let j = 0; j < matrixB[0].length; j++) {
            let sum = 0;
            console.log(`  Processing column ${j} of matrixB`);
            
            for (let k = 0; k < matrixA[0].length; k++) {
                console.log(`    Multiplying matrixA[${i}][${k}] (${matrixA[i][k]}) * matrixB[${k}][${j}] (${matrixB[k][j]})`);
                sum += matrixA[i][k] * matrixB[k][j];
                console.log(`    Current sum: ${sum}`);
            }

            console.log(`  Column ${j} result: ${sum}`);
            row.push(sum);
        }

        console.log(`Row ${i} result: ${row}`);
        result.push(row);
    }

    console.log(`Final result matrix: ${JSON.stringify(result)}`);
    return result;
}

let productMatrix = multiplyMatrices(matrixA, matrixB);
console.log(productMatrix);

function transposeMatrix(matrix) {
    let result = [];
    
    for (let i = 0; i < matrix[0].length; i++) {
        let row = [];
        for (let j = 0; j < matrix.length; j++) {
            row.push(matrix[j][i]);
        }
        result.push(row);
    }
    
    return result;
}

let transposedMatrix = transposeMatrix(matrixA);
console.log(transposedMatrix);

// [ 
// [ 1, 3 ], 
// [ 2, 4 ] 
// ]

//addMatrices(matrixA, matrixB);
