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
        const node = new Node(data, this.head);
        this.head = node;
        // this.insertAt(data, 0);
    }

    size() {
        let counter = 0;
        let node = this.head;
        while (node) {
            counter++;
            node = node.next
        }
        return counter;
    }

    getFirst() {
        return this.head;
        // return this.getAt(0);
    }

    getLast() {
        if (!this.head) {
            return null
        }
        let node = this.head;
        while (node) {
            if (!node.next) {
                return node;
            }
            node = node.next
        }
        // return this.getAt(this.size() - 1)
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (!this.head) {
            return;
        }
        this.head = this.head.next;
    }

    removeLast() {
        if (!this.head) {
            return;
        }
        if (!this.head.next) {
            this.head = null;
            return;
        }
        let previous = this.head;
        let node = this.head.next;
        while (node.next) {
            previous = node;
            node = node.next;
        }
        previous.next = null;
    }

    insertLast(data) {
        const last = this.getLast();
        if (last) {
            const node = new Node(data)
            last.next = node
        } else {
            this.head = new Node(data);
        }
    }

    getAt(i) {
        let node = this.head;
        let counter = 0;
        while (node) {
            if (counter === i) {
                return node;
            }
            counter++;
            node = node.next;

        }
        return null;
    }

    removeAt(i) {
        if (!this.head) {
            return;
        }
        if (i === 0) {
            this.head = this.head.next;
            return;
        }
        const previous = this.getAt(i - 1);
        if (!previous || !previous.next) {
            return;
        }
        previous.next = previous.next.next;
    }

    insertAt(data, i) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }
        if (i === 0) {
            this.head = new Node(data, this.head);
            return;
        }
        const previous = this.getAt(i - 1) || this.getLast();
        const node = new Node(data, previous.next);
        previous.next = node;
    }

    // forEach(func) {
    //     let node = this.head;
    //     let counter = 0;
    //     while (node) {
    //         func(node, counter);
    //         node = node.next;
    //         counter++;
    //     }
    // }

    // *[Symbol.iterator]() {
    //     let node = this.head;
    //     while (node) {
    //         yield node;
    //         node = node.next;
    //     }
    // }
}



module.exports = { Node, LinkedList };
