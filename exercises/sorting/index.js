// --- Directions
// Given an array, sort and return result
// Implement bubbleSort, selectionSort, and mergeSort

// worst case run n^2 but easiest
function bubbleSort(arr) {
  // iterate over the entire array
  for (let i = 0; i < arr.length; i++) {
    // iterate through array for greatest value
    for (let j =0; j < (arr.length - i - 1); j++) {
      // compare values
      if (arr[j] > arr [j+1]) {
        // find smaller value
        const lesser = arr[j+1];
        // new smaller value becomes j
        arr[j+1] = arr[j];
        arr[j] = lesser;
      }
    }
  }
   return arr;
}

// worst case n^2 but easier
// 'prove me wrong' function
function selectionSort(arr) {
  for (i = 0; i < arr.length; i++) {
    let indexOfMin = i;
    for (let j = i +1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]){
        indexOfMin = j
      }
    }
    if (indexOfMin !== i) {
      let lesser = arr[indexOfMin];
      arr[indexOfMin] = arr[i];
      arr[i] = lesser;
    }
  }
  return arr;
}

// worst case n*log(n) but medium
// recursive solution
function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  const center = Math.floor(arr.length / 2);
  const left = arr.slice(0, center);
  const right = arr.slice(center);

  // recursive call
  return merge(mergeSort(left), mergeSort(right));
}

// iterative function
function merge(left, right) {
  const results = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }
  // ES6 functionality
  // create a new array with results and remaining value from either array
  return [...results, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort };
