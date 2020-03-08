class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next
    }
}

var head = null;

class SinglyLinkedList {
    constructor() {
        this.head = null;
    }
    insert(node) {
        var newNode = new Node(node);
        if (this.head == null) {
            this.head = newNode;
        } else {
            var temp = this.head;
            while (temp.next) {
                temp = temp.next
            }
            temp.next = newNode;
        }
    }
    inseertStart(node) {
        if (this.head) {
            var newNode = new Node(node);
            var temp = this.head;
            this.head = newNode;
            this.head.next = temp;
        }
    }
    insertMid(node, target) {
        var current = this.head,
            prev;
        var newNode = new Node(node)
        var i = 0;
        while (i < target) {
            i++;
            prev = current;
            current = current.next
        }
        newNode.next = current;
        prev.next = newNode;
    }
    deleteHead() {
        if (this.head) {
            var temp = this.head.next;
            this.head = temp;
        }
    }
    deleteMid(val, k) {
        var node = val,
            last;
        if (node && node.value === k) {
            return node.next;
        }
        while (node && node.value !== k) {
            last = node,
                node = node.next;
        }
        if (last && node.value === k) {
            last.next = node.next;
        }
        return val;
    }
    deleteLast() {
        if (!this.head) {
            return null;
        }
        if (!this.head.next) {
            this.head = null
            return;
        }
        let prev = this.head,
            tail = this.head.next;
        while (tail.next !== null) {
            prev = tail;
            tail = tail.next;
        }
        prev.next = null;
        return this.head
    }
    searchElement(node) {
        var count = 0;
        var temp = this.head;
        while (temp !== null) {
            if (temp.value === node) {
                return count;
            }
            count++
            temp = temp.next
        }
        return -1;
    }
    printList() {
        var temp = this.head;
        var str = "";
        while (temp) {
            str += temp.value + "   ";
            temp = temp.next;
        }
        console.log(str);
    }
}

var list = new SinglyLinkedList()
list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);
list.insert(5);
list.insert(6);
list.printList()
console.log(list);
console.log(list.searchElement(6));