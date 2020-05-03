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

  insertLast(data) {
    let node = new Node(data);
    let last = this.getLast();
    if (last) {
      last.next = node;
    } else {
      this.head = node;
    }

    return this;
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
    }

    let prev = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, prev.next);
    prev.next = node;
  }

  size() {
    let current = this.head;
    let count = 0;
    while (current) {
      current = current.next;
      count++;
    }

    return count;
  }

  getFirst() {
    // return this.head;
    return this.getAt(0);
  }

  getLast() {
    // if (!this.head) {
    //   return null;
    // }

    // let current = this.head;
    // while (current.next !== null) {
    //   current = current.next;
    // }

    // return current;
    return this.getAt(this.size() - 1);
  }

  getAt(index) {
    let count = 0;
    let current = this.head;

    while (current) {
      if (index === count) {
        return current;
      }
      current = current.next;
      count++;
    }

    return null;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return null;
    }

    this.head = this.head.next;

    return this;
  }

  removeLast() {
    if (!this.head) {
      return;
    }

    let current = this.head;

    if (!current.next) {
      this.head = null;
      return;
    }

    let prev = current;
    let nextNode = current.next;

    while (nextNode.next) {
      prev = nextNode;
      nextNode = nextNode.next;
    }
    prev.next = null;
    return this;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const prev = this.getAt(index - 1);

    if (!prev || !prev.next) {
      return;
    }

    prev.next = prev.next.next;

    return this;
  }
}

const list = new LinkedList();
list.insertFirst("a");
list.insertFirst("b");
list.insertFirst("c");
console.log(list.removeLast());
list.size(); // returns 1
list.getLast(); // returns node with data of 'b'
console.log(list.getAt(2));

module.exports = { Node, LinkedList };
