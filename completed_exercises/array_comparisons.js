function compareTriplets(a, b) {
    let aWins = 0
    let bWins = 0
    let finalArray;
    

    for (let i = 0; i < a.length; i++){
        if ( a[i] > b[i]){
            aWins++;
        }
        else if ( a[i] < b[i]){
            bWins++;
        }
        else{
            finalArray
        }
            
    }
    return finalArray = [aWins, bWins]
}