// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

// width = breth first traversal
function levelWidth(root) {
  let arr = [root, 'stop'];
  let counter = [];

  while (arr.length > 1) {
    const node = arr.shift();
 
    if (node  === 'stop') {
      counters.push(0);
      arr.push('stop');
    } else {
      arr.push(...node.children);
      counter[counter.length - 1]++;
    }
  }
  
  return counter;
}

module.exports = levelWidth;
