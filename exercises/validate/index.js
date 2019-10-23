// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
  if (node.data > max && max !== null) {
    return false;
  }
  if (node.data < min && min !== null) {
    return false;
  }

  //go down left
  //function goes down the left side of the tree checking all values
  if (node.left && !validate(node.left, min, node.data)) {
    //update max value if moving to left
    return false;
  }

  //then, goes down right side to check all values
  //becuase its recurisve in if statement
  if (node.right && !validate(node.right, node.data, max)) {
    //update min value if moving to right
    return false;
  }

  return true;
}

module.exports = validate;
