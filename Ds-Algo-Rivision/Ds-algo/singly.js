class Node {
  constructor(value, next = null) {
    (this.value = value), (this.next = next);
  }
}

class SinglyList {
  constructor() {
    this.head = null;
  }
  addEnd(value) {
    if (this.head === null) {
      this.head = new Node(value);
    } else {
      var temp = this.head;
      while (temp.next) {
        temp = temp.next;
      }
      temp.next = new Node(value);
    }
    return this.head;
  }
  printMiddle() {
    var firstPointer = this.head;
    var secondPointer = this.head;
    if (this.head !== null) {
      while (secondPointer !== null && secondPointer.next !== null) {
        secondPointer = secondPointer.next.next;
        firstPointer = firstPointer.next;
      }
      console.log("Middle Element : ", firstPointer.value);
    }
  }
  reverse() {
    var pointer = this.head;
    var prev = null;
    var current = null;
    while (pointer !== null) {
      current = pointer;
      pointer = pointer.next;
      current.next = prev;
      prev = current;
      this.head = current;
    }
  }
  findLength() {
    var size = 0;
    var current = this.head;
    while (current !== null) {
      size++;
      current = current.next;
    }
    return console.log("Size : ", size);
  }
  findKthElm(k) {
    var size = 0;
    var current = this.head;
    while (current !== null) {
      if (size === k) {
        return console.log("Kth Element : ", current.value);
      }
      size++;
      current = current.next;
    }
  }
}

var list = new SinglyList();
list.addEnd(1);
list.addEnd(2);
list.addEnd(3);
list.addEnd(4);
list.addEnd(5);
list.addEnd(6);
list.addEnd(7);
list.reverse();
console.log(list);
