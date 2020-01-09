function diagonalDifference(arr) {
    let sum = 0 
    let diagonal1 = 0
    let diagonal2 = 0
    let dim = arr.length

    for ( let i = 0, j = (dim -1); i < dim, j > -1; i++, j--){
        diagonal1 += arr[i][i]
        diagonal2 += arr[i][j]
    }    

    return Math.abs(diagonal1-diagonal2)
    
}