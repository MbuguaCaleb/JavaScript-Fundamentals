/*linked list 

A linear datastructure
Ordered collection of data..
Unlike an  array the elements are not stored together in sequencialMemory Location
Elements are linked together via pointers
We have nodes each with two sections where we have data as well as pointers to next
element in the linked list


Last element in a linked list is a tail which has got refrence to null.....

First element is the head

*/

/*
//node 1
const n1 = {
  data: 100
};

//node 2
const n2 = {
  data: 200
};

n1.next = n2;

console.log(n1);
*/

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //Insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  //Insert last node

  //Insert at index

  //Get at index

  //Remove at index

  //clear the list
}

const ll = new LinkedList();

ll.insertFirst(100);

console.log(ll);
