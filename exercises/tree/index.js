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
    constructor(data){
        this.data = data
        this.children = []
    }

    add(data){
        let newNode = new Node(data)
        this.children.push(newNode)
    }

    remove(data){
        for (let i = 0; i < this.children.length; i++) {
            if(this.children[i].data === data){
                this.children.splice(i, 1)
            }
        }
    }
}

class Tree {
    constructor(){
        this.root = null
    }

    traverseBF(fn){
        let arr = [this.root]
        while(arr.length){
            let node = arr.shift()
            arr.push(...node.children)
            fn(node)
        }
    }

    traverseDF(fn){
        let arr = [this.root]
        while(arr.length){
            let node = arr.shift()
            arr.unshift(...node.children)
            fn(node)
        }
    }
}

module.exports = { Tree, Node };
