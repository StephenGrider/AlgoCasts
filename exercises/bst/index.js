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
    this.left = null;
    this.right = null;
  }

  // recursive method
  insert(data) {
    // data < node and node exists
    if (data < this.data && this.left) {
      this.left.insert(data);
      //data < node, create new node
    } else if (data < this.data) {
      this.left = new Node(data);
      // data > node and node exists
    } else if (data > this.data && this.right) {
      this.right.insert(data);
      //data > node, create new node
    } else if (data > this.data) {
      this.right = new Node (data);
    }
  }
}

module.exports = Node;
