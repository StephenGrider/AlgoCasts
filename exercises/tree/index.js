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
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    add(data) {
        const node = new Node(data);
        this.children.push(node);
    }

    remove(data) {
        this.children = this.children.filter(node => {
            return node.data !== data;
        })
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    traverseBF(fn) {
        const arr = [this.root];

        while (arr.length) {
            const node = arr.shift(); // returns first removed node

            // arr.push(node.children) // cannot do this as it creates new arr inside arr, so we can use the following code:
            // for (let child of node.children) {
            //     arr.push(child);
            // }
            // or ES6 spread operator: arr.push(...node.children)
            arr.push(...node.children);
            fn(node) // for testing purpose
        }
    }
    traverseDF(fn) {
        const arr = [this.root];

        while (arr.length) {
            const node = arr.shift(); // returns first removed node
            arr.unshift(...node.children);
            fn(node) // for testing purpose
        }
    }
}

module.exports = { Tree, Node };
