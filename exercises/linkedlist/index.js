// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null){
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }

  insertFirst(data){
    this.head = new Node(data, this.head);
  }
  size(){
    let numOfNodes = 0;
    let current = this.head;
    while(current){
      numOfNodes ++;
      current = current.next;
    }
    return numOfNodes;
  }
  getFirst(){
    return this.head;
  }
  getLast(){
    if (this.head === null) return null;
    let current = this.head;
    while(current.next){
      current = current.next;
    }
    return current;
  }
  clear(){
    this.head = null;
  }
  removeFirst(){
   if (this.head){
     this.head = this.head.next;
   }
  }
  removeLast(){
    if (this.head){
      if(!this.head.next){
        this.head = null;
        return;
      }
      let previous = this.head;
      let node = this.head.next;
      while(node.next){
        previous = node;
        node = node.next;
      }
      previous.next = null;
    }
  }
  
  insertLast(data){
    let node = new Node(data);
    let lastNode = this.getLast();
    if (lastNode){
      lastNode.next = node;
    }
    else{
      this.head = node;
    }
  }
  
  getAt(index){
    let counter = 0;
    let current = this.head;
    while(current){
      if (counter === index){
        return current;
      }
      counter++;
      current = current.next;
    }
    return null;
  }
  //Removes node at the provided index
  removeAt(index){
    let nodeToRemove = this.getAt(index);
    //handle case when list is empty
    //handle case when index is greater than the size of the list 
    if (nodeToRemove){
      //handle case when it is the first node
      //handle case when there is only one node
      if (nodeToRemove === this.head){
        this.head = nodeToRemove.next;
        return;
      }
      //else we get the previous node and set its pointer to the nodeToRemove's next node
        let previous = this.getAt(index-1);
        previous.next = nodeToRemove.next;
    }
  }
  //Create an insert a new node at provided index. 
  //If index is out of bounds, add the node to the end of the list.

  insertAt(index){

  }
}

module.exports = { Node, LinkedList };
