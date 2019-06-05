class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  //linked list class only knows about the first node
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    if (!this.head) {
      this.head = new Node(data, this.head);
    } else {
      this.next = this.head;
      this.head = new Node(data, this.next);
    }
  }

  size() {
    let node = this.head;
    if (!this.head) {
      return 0;
    } else {
      let counter = 0;
      while (node) {
        counter++;
        node = node.next;
      }
      return counter;
    }
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;
    if (!node) {
      return null;
    }
    while (node) {
      if (node.next !== null) {
        node = node.next;
      } else {
        return node;
      }
    }
    return node;
  }

  clear() {
    this.head = null;
    return this.head;
  }

  removeFirst() {
    //no head? return null
    if (!this.head) {
      return;
    } else {
      //head exists
      //does this.next === null ?
      if (!this.head.next) {
        //means this.head is first
        this.head.next = null;
        this.head = this.head.next;
        return this.head;
      } else {
        this.head = this.head.next;
        return this.head;
      }
    }
  }

  removeLast() {
    if (!this.head) {
      //this.head does not exist;
      return;
    }
    if (this.size() === 1) {
      this.head = null;
      return;
    } else {
      //use helper to get Last node
      let last = this.getLast();
      //assign node to this.head
      let node = this.head;
      //if no last return null
      //while node exists...
      while (node) {
        if (node.next === last) {
          node.next = null;
          return node;
        }

        if (node.next !== last) {
          node = node.next;
        }
      }
    }
  }

  insertLast(data) {
    let last = this.getLast();
    if (!last) {
      this.head = new Node(data);
    } else {
      last.next = new Node(data);
    }
  }

  getAt(int) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (int === counter) {
        return node;
      } else {
        counter++;
        node = node.next;
      }
    }
    return null;
  }

  removeAt(int) {
    if (this.size() < int || !this.head) {
      return;
    }
    const prev = this.getAt(int - 1);
    const next = this.getAt(int + 1);

    if (!prev) {
      let node = this.head;
      node = null;
      this.head = next;
      return this.head;
    }

    if (!prev.next) {
      return this.removeLast();
    }
    prev.next = next;
    return prev;
  }

  insertAt(data, int) {
    //takes care of empty list
    if (!this.head) {
      return this.insertFirst(data);
    }
    //takes care of int decalred outside of size
    if (int > this.size()) {
      return this.insertLast(data);
    }

    if (int === 0) {
      this.head = new Node(data, this.head);
      return this.head;
    }

    //gets previous node
    let prev = this.getAt(int - 1);
    //gets next node
    //assigns new Node with data and a next value
    prev.next = new Node(data, prev.next);
  }

  forEach(func) {
    let node = this.head;
    if (!this.head) {
      return 0;
    } else {
      while (node) {
        func(node);
        node = node.next;
      }
    }
  }

  //optional...
  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };

// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

// const NodeOne = {
//     data: 123,
// };
// const nodeTwo = {
//     data: 456
// }

// NodeOne.next = nodeTwo;
// nodeTwo.next = null;

// console.log(NodeOne);
// console.log(nodeTwo);
