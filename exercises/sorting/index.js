// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < (arr.length - i - 1); j++) {
      if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }

  return arr;
}

function selectionSort (arr) {
  let indexOfMin = 0;

  for (let i = 0; i < arr.length; i++) {
    indexOfMin = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[indexOfMin] > arr[j]) indexOfMin = j;
    }

    if (i !== indexOfMin) [arr[indexOfMin], arr[i]] = [arr[i], arr[indexOfMin]];
  }

  return arr;
}

function mergeSort (arr) {
  let smallChunks = arr.map(num => [num]);
  let bigChunks = [];


  let sortedResult = [];
  while (sortedResult.length !== arr.length) {
    if (!smallChunks.length) {
      smallChunks = bigChunks;
      bigChunks = [];
    }

    sortedResult = merge(smallChunks.shift(), smallChunks.shift() || []);
    bigChunks.push(sortedResult);
  }

  return sortedResult;
}


function merge (left, right) {
  const results = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) results.push(left.shift());
    else results.push(right.shift());
  }


  return [...results, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };