let matrixA : number[][] =  [[1,2], [3,4]]

let matrixB : number[][] = [[5,6], [7,8]]

const addMatices = (matrixA: number[][], matrixB: number[][]) => {
    let result: number[][] = []

    for(let i : number = 0; i < matrixA.length; i++){
        let row: number[] = []

        for(let j : number = 0; j < matrixA[i].length; j++){
            row.push(matrixA[i][j] + matrixB[i][j])
        }

        result.push(row)
    }

    console.log(result)
    return result;
}