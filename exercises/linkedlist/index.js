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
        if(!this.head) {
            console.log("no head")
            this.head = new Node(data, this.head);
        }
        else {
            this.next = this.head;
            this.head = new Node(data, this.next);
        }
    }

    size() {
        if(!this.head) {
            return 0;
        } else {
            
        }
    }
}

const list = new LinkedList();
list.insertFirst(10);
list.insertFirst(10);
list.insertFirst(10);
list.insertFirst(10);
console.log(list);
console.log(list.size());


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

