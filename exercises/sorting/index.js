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
  if (arr.length === 1) return arr;

  const left = arr.slice(0, arr.length / 2);
  const right = arr.slice(arr.length / 2, arr.length);

  return merge(mergeSort(left), mergeSort(right));
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