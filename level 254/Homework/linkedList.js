const fs = require("fs");
const { json } = require("stream/consumers");
const db_path = "./db.json";

function readDB() {
  return json.parse(fs.readFileSync(db_path, "utf-8"));
}

function writeDB(data) {
  fs.writeFileSync(db_path, json.stringify(data, null, 2));
}

class Node {
  constructor(id, value) {
    this.id = id;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.db = readDB();
  }

  save() {
    writeDB(this.db);
  }

  append(value) {
    const id = Date.now().toString();
    const node = new Node(id, value);

    if (!this.db.head) {
      this.db.head = id;
      this.db.tail = id;
    } else {
      const tail = this.db.nodes[this.db.tail];
      tail.next = id;
      node.prev = this.db.tail;
      this.db.tail = id;
    }

    this.db.nodes[id] = node;
    this.save();
  }

  prepend(value) {
    const id = Date.now().toString();
    const node = new Node(id, value);

    if (!this.db.head) {
      this.db.head = id;
      this.db.tail = id;
    } else {
      const head = this.db.nodes[this.db.head];
      head.prev = id;
      node.next = this.db.head;
      this.db.head = id;
    }

    this.db.nodes[id] = node;
    this.save();
  }

  
  remove(id) {
    const node = this.db.nodes[id];
    if (!node) return;

    if (node.prev) this.db.nodes[node.prev].next = node.next;
    if (node.next) this.db.nodes[node.next].prev = node.prev;

    if (this.db.head === id) this.db.head = node.next;
    if (this.db.tail === id) this.db.tail = node.prev;

    delete this.db.nodes[id];
    this.save();
  }

  
}

