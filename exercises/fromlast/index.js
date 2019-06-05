const LL = require('./linkedlist');
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


//step 1: advance fast by n spaces
//step 2: leave slow alone
//step 3: advance fast and slow by 1
//step 4: is fast at last element? 
//if so, slow == nth from end.
//if not, advance again. 

function fromLast(list, n) {
    let fast = list.head;
    let slow = list.head;

    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }

    while(fast.next) {
        fast = fast.next;
        slow = slow.next;
    }
    return slow;


    

    

}

module.exports = fromLast;
