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

function levelWidth(root) {
  const counters = [0]

  const arr = [root, 's']

  while (arr.length > 1) {
    const element = arr.shift()

    if (element === 's') {
      arr.push(element)
      counters.push(0)
    } else {
      counters[counters.length - 1] += 1
      arr.push(...element.children)
    }
  }

  return counters
}

module.exports = levelWidth
