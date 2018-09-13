// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }
}

// // Mini Test for Repl.it
// const nodeOne = new Node(5);
// const list = new LinkedList();
// list.head = nodeOne;
// list.insertFirst(3);
// list;

module.exports = { Node, LinkedList };
