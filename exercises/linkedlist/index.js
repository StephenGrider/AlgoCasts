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
    let node = new Node(data);
    if (this.head) {
      let next = this.head;
      this.head = node;
      node.next = next;
    } else {
      this.head = node;
    }
  }

  size() {
    if (!this.head) {
      return 0;
    }

    let counter = 0;
    let current = this.head;
    while (current) {
      counter++;
      current = current.next;
    }
    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let current = this.head;
    while (current && current.next !== null) {
      current = current.next;
    }
    return current;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head.next) {
      this.head = null;
    } else {
      this.head = this.head.next;
    }
  }

  removeLast() {
    if (!this.head) {
      return null;
    }
    if (!this.head.next) {
      this.head = null;
      return null;
    }

    let current = this.head.next;
    let previous = this.head;
    while (current.next !== null) {
      previous = current;
      current = current.next;
    }
    previous.next = null;
  }

  insertLast(data) {
    let node = new Node(data);
    if (!this.head) {
      //empty list
      this.head = node;
    } else {
      //iterate through the list
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
      node.next = null;
    }
  }

  getAt(integer) {
    if (integer === 0) {
      return this.head;
    }
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === integer) {
        return node;
      }
      node = node.next;
      counter++;
    }
    return null;
    //return null bc integer is greater than length of list
  }

  removeAt(integer) {
    if (!this.head) {
      //empty list
      return null;
    }

    if (integer === 0) {
      //remove head
      this.head = this.head.next;
      return;
    }
    let counter = 1;
    let node = this.head.next;
    let previous = this.head;
    while (node) {
      if (counter === integer) {
        previous.next = node.next;
        return;
      }
      previous = node;
      node = node.next;
      counter++;
    }
    return null;
  }

  insertAt(data, integer) {
    let node = new Node(data);
    if (integer === 0) {
      node.next = this.head;
      this.head = node;
      return;
    }
    let counter = 1;
    let current = this.head.next;
    let previous = this.head;
    while (current) {
      if (counter === integer) {
        node.next = current;
        previous.next = node;
        return;
      }
      previous = current;
      current = current.next;
      counter++;
    }
    if (counter === integer || counter < integer) {
      //add node at last position
      previous.next = node;
      node.next = null;
      return;
    }

    return null;
  }

  forEach(func) {
    let current = this.head;
    while (current) {
      func(current);
      current = current.next;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
