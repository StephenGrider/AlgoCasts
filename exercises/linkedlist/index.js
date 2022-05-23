// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor (data, next = null) {
    this.data = data;
    this.next = next;

    return this;
  }
}

class LinkedList {
  constructor () {
    this.head = null;
  }

  insertFirst (data) {
    this.head = new Node(data, this.head);
  }

  size () {
    let size = 0;
    let currentNode = this.head;

    while (currentNode) {
      currentNode = currentNode.next;
      size++;
    }

    return size;
  }

  getFirst () {
    return this.head;
  }

  getLast () {
    if (!this.head) return null;

    let last = this.head;

    while (last.next) last = last.next;

    return last;
  }

  clear () {
    this.head = null;
  }

  removeFirst () {
    if (!this.head) return;

    this.head = this.head.next;
  }

  removeLast () {
    if (!this.head || !this.head.next) return this.head = null;

    let node = this.head;
    while (node) {
      if (!node.next.next) return node.next = null;

      node = node.next;
    }
  }

  insertLast (data) {
    const last = this.getLast();
    if (!last) return this.head = new Node(data);

    last.next = new Node(data);
  }

  getAt (index) {
    let node = this.head;
    let currentIndex = 0;

    while (node) {
      if (index === currentIndex) return node;
      currentIndex++;
      node = node.next;
    }

    return null;
  }

  removeAt (index) {
    const previousNode = this.getAt(index - 1);
    const nodeToRemove = this.getAt(index);
    const nextNode = this.getAt(index + 1);

    if (!nodeToRemove) return;

    if (!previousNode) return this.head = nextNode;

    previousNode.next = nextNode;
  }

  insertAt (data, index) {
    const previousNode = this.getAt(index - 1);
    const nodeToReplace = this.getAt(index);

    const createdNode = new Node(data, nodeToReplace);

    if (index === 0) return this.head = createdNode;

    if (index > this.size()) return this.getLast().next = createdNode;


    previousNode.next = createdNode;
  }

  forEach (callback) {
    for (const node of this) {
      callback(node);
    }
  }

  *[Symbol.iterator] () {
    let node = this.head;

    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };