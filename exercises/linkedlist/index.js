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

  // // Mini Test for Repl.it insertFirst method
// const nodeOne = new Node(5);
// const list = new LinkedList();
// list.head = nodeOne;
// list.insertFirst(3);
// list;

  // individual solution
  // size() {
  //   let size = 0;
  //   let currentNode = this.root;
  //   while (currentNode) {
  //     currentNode = currentNode.next;
  //     size++;
  //   }
  //   return size;
  // }

  // course solution
  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    // check to see if first node is defined
    if (!this.head) {
      return null;
    }
    // define first node
    let node = this.head;
    // check all nodes
    while (node) {
      // does node point to next or null??
      if (!node.next) {
        return node;
      }
      // keep checking
      node = node.next
    }
  }

  // disconnect the head of the linkedList
  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
  }

  removeLast() {
    // check if list is empty
    if (!this.head) {
      return;
    }
    // check if list has only one node
    if (!this.head.next) {
      this.head = null;
      return;
    }
    // check through each node in list
    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  insertLast(data) {
    // use getLast method from above
    const last = this.getLast();
    // some nodes exist
    if (last) {
      last.next = new Node(data)
    // list is empty
    } else {
      this.head = new Node(data);
    }
  }


}


module.exports = { Node, LinkedList };
