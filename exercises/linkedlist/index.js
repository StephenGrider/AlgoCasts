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

    insertFirst (data) {
        this.head = new Node(data, this.head)
    }

    size() {
        let counter = 0
        if (this.head) {
            let check = this.head
            while(check){
                counter++
                check = check.next
            }
        }
        return counter
    }

    getFirst() {
        return this.head
    }

    getLast() {
        let check = this.head
        if (this.head) {
            while(check.next){
                check = check.next
            }
        }
        return check
    }

    clear() {
        this.head = null
    }

    removeFirst() {
        if(this.head){
            this.head = this.head.next
        }else return
    }

    removeLast() {
        if (this.head) {
            let prev = this.head
            let curr = this.head.next
            if(!curr){
                this.head = null
                return
            }
            while(curr.next){
                prev = curr
                curr = curr.next
            }
            prev.next = null
        }else return
    }

    insertLast(data) {
        let last = this.getLast()

        if(last){
            last.next = new Node(data)
        } else {
            this.insertFirst(data)
        }
    }

    getAt(index){
        let counter = 0
        let check = this.head
        if (this.head) {
            while(counter < index){
                counter++
                check = check.next
            }
        }
        return check
    }

    removeAt(index){
        // if (this.head) {
        //     let counter = 0
        //     let prev = this.head
        //     let curr = this.head
        //     let next = this.head.next
        //     if (index === 0){
        //         this.removeFirst()
        //         return
        //     }
        //     while(counter < index && next){
        //         counter++
        //         prev = curr
        //         curr = next
        //         next = next.next
        //     }
        //     prev.next = next
        // }

        if (!this.head) return
        if (index === 0){
            this.removeFirst()
            return
        }
        let prev = this.getAt(index - 1)
        if(!prev || !prev.next)return
        prev.next = prev.next.next
    }

    insertAt(data, index){
        if (index <= 0){
            this.insertFirst(data)
            return
        }
        if (index >= this.size() - 1) {
            this.insertLast(data)
            return
        }
        let prev = this.getAt(index - 1)
        let newNode = new Node(data, prev.next)
        prev.next = newNode
    }

    forEach(func) {
        if (!this.head) return
        for (let i = 0; i < this.size(); i++) {
            func(this.getAt(i))
        }
    }

    *[Symbol.iterator]() {
        let node = this.head
        while(node) {
            yield node
            node = node.next
        }
    }

}


module.exports = { Node, LinkedList };
