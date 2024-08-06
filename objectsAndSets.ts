let array : number[] = [1,2,2,3,3,3,4]
let freq : Object = {}

array.forEach((num : number) => {
    if(!(num in freq)){
        freq[num] = 1
    } 
    else{
        freq[num] += 1
    }
} )

console.log(freq)

function containsDups(arr: number[]) {
    let set = new Set()

    for(let i = 0 ; i < arr.length; i++){
        if(!(arr[i] in set)){
            set.add(arr[i])
        }
        else{
            return true
        }
    }
    return false
}

console.log(containsDups([1, 2, 3, 4, 5]))
console.log(containsDups([1, 2, 3, 4, 4]))
