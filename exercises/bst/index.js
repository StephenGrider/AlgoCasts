// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(data) {
    this.data = data;
    this.right = null;
    this.left = null;
  }

  insert(data) {
    let node = new Node(data);
    let current = this;
    while (current) {
      if (node.data < current.data) {
        //go down left
        if (!current.left) {
          current.left = node;
          return;
        }
        current = current.left;
      }
      if (node.data > current.data) {
        if (!current.right) {
          current.right = node;
          return;
        }
        current = current.right;
      }
    }
  }

  contains(data) {
    let current = this;
    while (current) {
      if (data < current.data) {
        current = current.left;
      } else if (data > current.data) {
        current = current.right;
      } else {
        return current;
      }
    }
    return null;
  }
}

module.exports = Node;
