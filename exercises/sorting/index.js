// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let stopIndex = arr.length - i - 1
       for (let j = 0; j < stopIndex; j++) {
         if (arr[j] > arr[j + 1]) {
             let max = arr[j]
             arr[j] = arr[j + 1]
             arr[j + 1] = max
         }
       }
    }
    return arr
}

function selectionSort(arr) {

}

function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
