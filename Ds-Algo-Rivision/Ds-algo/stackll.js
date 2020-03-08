class Node {
  constructor(value, next) {
    (this.value = value), (this.next = next);
  }
}

class StackList {
  constructor(head) {
    this.head = null;
  }
  addStart(value) {
    if (this.head === null) {
      this.head = new Node(value);
    } else {
      let temp = this.head;
      this.head = new Node(value);
      this.head = temp;
    }
  }
  deleteFirst() {
    if (this.head === null) {
      return "List is Empty";
    } else {
      this.head = this.head.next;
    }
  }
}
