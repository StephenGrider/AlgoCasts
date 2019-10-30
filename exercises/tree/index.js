// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(value) {
    this.data = value;
    this.children = [];
  }

  add(element) {
    let node = new Node(element);
    this.children.push(node);
    return this.children;
  }

  remove(element) {
    let index = this.children.indexOf(element);
    this.children = this.children.splice(index, index);
    return this.children;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF(fn) {
    let arr = [this.root];
    while (arr.length > 0) {
      let element = arr.shift();
      element.children.forEach(child => arr.push(child));
      fn(element);
    }
  }

  traverseDF(fn) {
    let arr = [this.root];
    while (arr.length) {
      let element = arr.shift();
      arr.unshift(...element.children);
      //spread operator
      //element.children.forEach(child => arr.unshift(child));

      fn(element);
    }
  }
}

module.exports = { Tree, Node };
