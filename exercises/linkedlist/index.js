// --- Directions
// Implement classes Node and Linked Lists

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
}

const node = new Node(10);
const list = new LinkedList();
list.head = node;

module.exports = { Node, LinkedList };
