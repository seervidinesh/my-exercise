class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

var head = null;

class stackList {
    constructor() {
        this.head = null;
    }
    push(node) {
        var newNode = new Node(node);
        if (this.head) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            this.head = newNode
        }
    }
    pop() {
        if (this.head) {
            let itemToPop = this.head
            this.head = this.head.next
            return console.log("Poped Item : " + itemToPop.value);
        } else {
            console.log('Stack is empty!')
        }
    }
    peek() {
        if (this.head) {
            console.log("Peek Item : " + this.head.value);
        } else {
            return null
        }
    }
    reverse() {
        let current = this.head
        let prev = null;
        while (current) {
            let next = current.next
            current.next = prev
            prev = current
            current = next
        }
        this.head = prev
    }
    length() {
        let current = this.head
        let counter = 0
        while (current) {
            counter++
            current = current.next
        }
        return console.log("Length of Stack : " +
            counter);
    }
    search(item) {
        let current = this.head;
        while (current) {
            if (current.data === item) {
                return true;
            }
            current = current.next
        }
        return false;
    }
    isEmpty() {
        return this.length > 1
    }
    printStack() {
        var temp = this.head;
        var str = "";
        while (temp) {
            str += temp.value + "   ";
            temp = temp.next;
        }
        console.log(str);
    }
}


var stack = new stackList();
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)
stack.push(6)
stack.peek()
stack.length()
stack.search(4)
stack.printStack()