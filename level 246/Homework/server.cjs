//! singly linked list

//? შეტრიალება
//? ჩამატება თავში და ბოლოში
//? შეცვლა კონკრეტული ნოუდის
//? შუაში ჩამატება/წაშლა



class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}



class LinkdeList {
    constructor() {
        this.head = null;
        this.size = 0;
        this.tail = null;
    }

    //* O(1)
    pushBack(value) {
        const newNode = new Node(value);

        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }



    //* O(1)
    pushFront(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;

        if (!this.tail) {
            this.tail = newNode;
        }
        this.size++;
    }

    //* O(n)
    popBack() {

        if(!this.head) {
            return;
        }
        if(this.head == this.tail ) {
            this.head = null;
            this.tail = null;
        }
        let current = this.head;

        while (current.next != this.tail) {
            current = current.next;

        }
        current.next = null;
        this.tail = current;

        this.size--;
    }

    //  head   X  Y  tail

    //* O(1)
    popFront() {
        if(!this.head) {
            return;
        }
        this.head = this.head.next;
        if(!this.size) {
            this.tail = null;
        }
        this.size--;
    }

    get(index) {
        if (index < 0 || index >= this.size) return null
        let cur = this.head
        for (let i = 0; i < index; i++) cur = cur.next
        return cur.value
    }

    insert(index, value) {
        if (index < 0 || index > this.size) return
        if (index === 0) return this.pushFront(value)
        if (index === this.size) return this.pushBack(value)

        const node = new Node(value)
        let cur = this.head
        for (let i = 0; i < index - 1; i++) cur = cur.next
        node.next = cur.next
        cur.next = node
        this.size++
    }

    erase(index) {
        if (index < 0 || index >= this.size) return
        if (index === 0) return this.popFront()

        let cur = this.head
        for (let i = 0; i < index - 1; i++) cur = cur.next
        if (cur.next === this.tail) this.tail = cur
        cur.next = cur.next.next
        this.size--
    }

    find(value) {
        let cur = this.head
        let i = 0
        while (cur) {
            if (cur.value === value) return i
            cur = cur.next
            i++
        }
        return -1
    }

    clear() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    reverse() {
        let prev = null
        let cur = this.head
        this.tail = this.head
        while (cur) {
            const next = cur.next
            cur.next = prev
            prev = cur
            cur = next
        }
        this.head = prev
    }

    toArray() {
        const arr = []
        let cur = this.head
        while (cur) {
            arr.push(cur.value)
            cur = cur.next
        }
        return arr
    }
};
