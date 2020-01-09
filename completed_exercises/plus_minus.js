function plusMinus(arr) {
    let n = arr.length
    let zero = 0
    let negative = 0
    let positive = 0
    let finalArray = []

    for (let number of arr){
        if (number > 0){
            positive++;
        }
        if (number < 0){
            negative++;
        }
        if (number === 0){
            zero++;
        }
    }

    console.log((positive/n)||0)
    console.log((negative/n)||0)
    console.log((zero/n)||0)

}