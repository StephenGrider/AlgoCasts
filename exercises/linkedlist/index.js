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
  constructor(){
    this.head = null;
  }//closing brackets for LinkedList

  insertFirst(data){
    this.head = new Node(data, this.head);
  }//closing brackets for insertFirst
  
}//closing brackets for LinkedList

module.exports = { Node, LinkedList };
