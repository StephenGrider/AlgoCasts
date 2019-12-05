// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
  //create two pointers that both start at the head of the list
  let slowPointer = list.head;
  let fastPointer = list.head;
  //initially want to move the fastPointer n positions
  while(n>0){
    fastPointer = fastPointer.next;
    n--;
  }
  //go into a while loop that argues that the fastPointer has a next node
    while(fastPointer.next){
      //move slowPointer to the next node
     //move fastPointer to the next node
      slowPointer = slowPointer.next;
      fastPointer = fastPointer.next;
    }
    return slowPointer;
  //return slowPointer;
}

module.exports = fromLast;
