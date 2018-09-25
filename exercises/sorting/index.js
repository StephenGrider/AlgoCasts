// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr;
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        indexOfMin = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[indexOfMin]) {
                indexOfMin = j;
            }
        }
        if (indexOfMin !== i) {
            [arr[i], arr[indexOfMin]] = [arr[indexOfMin], arr[i]]
        }

    }
    return arr;
}

function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }
    const center = Math.floor(arr.length / 2)
    const left = arr.slice(0, center)// slice from 0 not including 2
    const right = arr.slice(center) // slice from center to the rest of right side

    return merge(mergeSort(left), mergeSort(right))
}
// O(n)
function merge(left, right) {
    const results = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            results.push(left.shift());
        } else {
            results.push(right.shift());
        }
    }

    return [...results, ...left, ...right];
}
// just join everything that's remaining
// inside of left or right and add it to the result array
// by the time the while loop stops running either the 
// left or right array is going to be empty

// The shift() method removes the first element from an array
// and returns that removed element. 
// This method changes the length of the array.

// *** v2 w/sorting - more expensive***
// function merge(left, right) {
//     return left.concat(right).sort((a,b) => a - b);
//    }
module.exports = { bubbleSort, selectionSort, mergeSort, merge };
