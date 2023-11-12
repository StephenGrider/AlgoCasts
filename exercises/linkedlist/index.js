// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  insertFirst(data) {
    const node = new Node(data, this.head)
    this.head = node
  }

  size() {
    let node = this.head
    let listSize = 0
    while (node) {
      listSize++
      node = node.next
    }

    return listSize
  }

  getFirst() {
    return this.head
  }

  getLast() {
    let node = this.head

    while (node?.next) {
      node = node.next
    }

    return node
  }

  clear() {
    this.head = null
  }

  removeFirst() {
    this.head = this.head?.next ? this.head?.next : null
  }

  removeLast() {
    if (!this.head) {
      return
    }

    let prev = this.head
    let crt = this.head?.next

    if (!prev?.next) {
      this.head = null
      return
    }

    while (crt?.next) {
      prev = prev.next
      crt = crt.next
    }
    prev.next = null
  }

  insertLast(data) {
    let node = this.head
    let newNode = new Node(data)

    if (!node) {
      this.head = newNode
      return
    }
    while (node?.next) {
      node = node.next
    }

    node.next = newNode
  }

  getAt(index) {
    let count = 0
    let node = this.head
    if (index === 0) {
      return this.head ? this.head : null
    }
    while (count < index && node?.next) {
      count++
      node = node?.next
    }

    if (index !== count) {
      return null
    }
    return node
  }

  removeAt(index) {
    const nodeToRemove = this.getAt(index)
    const prevNode = this.getAt(index - 1)

    if (!nodeToRemove) {
      return null
    }

    if (nodeToRemove && !prevNode) {
      this.head = this.head.next
      return
    }

    prevNode.next = nodeToRemove.next
    nodeToRemove.next = null
  }

  insertAt(data, index) {
    if (!this.head < 0) {
      this.insertFirst(data)
      return
    }
    if (index === 0) {
      this.insertFirst(data)
      return
    }

    const prevNode = this.getAt(index - 1) || this.getLast()
    const nodeToAdd = new Node(data, prevNode.next)
    prevNode.next = nodeToAdd
  }

  forEach(fn) {
    for (let i = 0; i < this.size(); i++) {
      const node = this.getAt(i)
      fn(node, i)
    }
  }
}

module.exports = { Node, LinkedList }
