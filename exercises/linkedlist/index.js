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

  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    return null;
  }

  removeAt(index) {
    // does the list have at least 1 node?
    if (!this.head) {
      return;
    }
    // reassign head to index 1
    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    // recycle getAt method from above
    const previous = this.getAt(index - 1);
    // check if previous exits and if it points to 'undefined'
    if (!previous || !previous.next) {
      return;
    }
    // skip over current index
    previous.next = previous.next.next;
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }
    if (index === 0) {
      this.head = new Node(data, this.head)
      return;
    }
    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;
  }

  forEach(callback) {
    let current = this.head;
    while (current) {
      callback(current);
      current = current.next;
    }
}


module.exports = { Node, LinkedList };
