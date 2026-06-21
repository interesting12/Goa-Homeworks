class Element {
  constructor(data) {
    this.data = data
    this.next = null
    this.prev = null
  }
}

class DoubleList {
  constructor() {
    this.head = null
    this.tail = null
  }

  pushBack(data) {
    const node = new Element(data)

    if (!this.tail) {
      this.head = this.tail = node
    } else {
      node.prev = this.tail
      this.tail.next = node
      this.tail = node
    }
  }

  pushFront(data) {
    const node = new Element(data)

    if (!this.head) {
      this.head = this.tail = node
    } else {
      node.next = this.head
      this.head.prev = node
      this.head = node
    }
  }

  remove(data) {
    let current = this.head

    while (current) {
      if (current.data === data) {
        if (current.prev) current.prev.next = current.next
        else this.head = current.next

        if (current.next) current.next.prev = current.prev
        else this.tail = current.prev

        return
      }
      current = current.next
    }
  }
}
