// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for (let i=0; i<arr.length;i++){
    for (let j=0; j<(arr.length-i-1); j++){
      if (arr[j] > arr[j+1]){
        let greater = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = greater;
      }
    }
  }
  return arr;
}

function selectionSort(arr) {
  //keep track of i 
  //keep track of indexOfMin
  //keep track of j
  //assume that i is the min and prove otherwise
  for (let i=0; i<arr.length; i++){
    let indexOfMin = i;
    for (let j=i+1; j<arr.length; j++){
      if (arr[j] < arr[indexOfMin]){
        indexOfMin = j;
      }
    }
    if (i !== indexOfMin){
      let greater = arr[i]
      arr[i] = arr[indexOfMin];
      arr[indexOfMin] = greater;
    }
  }
  return arr;
}

function merge(left, right){
  let results = [];
  while(left.length && right.length){
    if (left[0] < right[0]){
      results.push(left.shift());
    }
    else{
      results.push(right.shift());
    }
  }
  return [...results, ...left, ...right];
}

function mergeSort(arr) {
   //subdivide array until it can't anymore
  if (arr.length === 1){
    return arr;
  }
  const midPoint = Math.floor(arr.length/2);
  const left = arr.slice(0,midPoint);
  const right = arr.slice(midPoint);
  //then pass the arrays to the merge function
  return merge(mergeSort(left), mergeSort(right));
}



module.exports = { bubbleSort, selectionSort, mergeSort, merge };
