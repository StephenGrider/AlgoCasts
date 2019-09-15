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
        const newNode = new Node(data, this.head);
        this.head = newNode
    }

    size() {
        let counter = 0
        let node = this.head;

        while (node) {
            counter++ ;
            node = node.next;
        }
        return counter
    }

    getFirst() {
        return this.head
    }

    getLast() {
        if(!this.head){
            return null
        }
        let node = this.head;
        while(node){
            if(!node.next){
                return node;
            }
            node = node.next
        }
    }

    clear() {
        this.head = null
    }

    removeFirst() {
        if(this.head === null){
            return null
        }
        let node = this.head
        this.head = node.next
    }

    removeLast(){
        if(this.head===null){
            return;
        }
        if(this.head.next === null){
            this.head = null
            return
        }
        let previous = this.head
        let node = this.head.next;
        while(node.next){
            previous = node
            node = node.next
        }
        previous.next = null
    }

    insertLast(newNode) {

        let last = this.getLast();

        if(last){
            last.next = new Node(newNode)
        }

        else {
            this.head = new Node(newNode)
        }
    }

    getAt(index) {

        let counter = 0
        let node = this.head

        if(!this.head){
            return null;
        }

        while(node) {
            if (index === counter){
                return node;
            }
            else {
                counter++;
                node = node.next
            }
        }

    }

    
}




module.exports = { Node, LinkedList };
