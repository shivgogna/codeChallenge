class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data);
  }

  size(integer) {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }

  getFirst(Node) {
    return this.head;
  }

  getLast(Node) {
    if (!this.head) return null;
    let node = this.head;

    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  clear() {
    let node = null;
  }

  removeFirst() {
    if (!this.head) return;
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) return null;
    let node = this.head;

    while (node) {
      if (!node.next) {
        node = null;
      }
      node = node.next;
    }
  }

  insertLast() {}
}
