// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent
//  whenever we move to the left we are really concerned about the max value.
//  whenever we move to the right - about the min value


function validate(node, min = null, max = null) {
    if (max !== null && node.data > max) return false;
    if (min !== null && node.data < min) return false;
    if (node.left) return validate(node.left, min, node.data);
    if (node.right) return validate(node.right, node.data, max); // or
    // if (node.left && !validate(node.left, min, node.data)) return false;
    // if (node.right && !validate(node.right, node.data, max)) return false;
    return true;
}

module.exports = validate;
