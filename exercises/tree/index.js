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
  constructor (data) {
    this.data = data;
    this.children = [];
  }

  add (data) {
    const node = new Node(data);
    this.children.push(node);
  }

  remove (data) {
    this.children = this.children.filter(child => child.data !== data);
  }
}

// class Tree {
//   constructor () {
//     this.root = null;
//   }

//   traverseDF (callback) {
//     traverseDF(this.root, callback);
//   }

//   traverseBF (callback) {
//     callback(this.root);
//     traverseBF(this.root, callback);
//   }
// }

// function traverseDF (node, callback) {
//   callback(node);
//   node.children.forEach(node => traverseDF(node, callback));
// }

// function traverseBF (node, callback) {
//   node.children.forEach(callback);
//   node.children.forEach(node => traverseBF(node, callback));
// }

class Tree {
  constructor () {
    this.root = null;
  }

  traverseBF (callback) {
    const arr = [this.root];

    while (arr.length) {
      const node = arr.shift();

      arr.push(...node.children);
      callback(node);
    }
  }

  traverseDF (callback) {
    const arr = [this.root];

    while (arr.length) {
      const node = arr.shift();
      arr.unshift(...node.children);

      callback(node);
    }
  }
}

module.exports = { Tree, Node };