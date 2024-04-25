const fs = require('fs');
let [n, input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let N = Number(n.trim().split(' ')[0]);
let M = Number(n.trim().split(' ')[1]);

const array = input.trim().split(' ').map(Number);

class Deque {
  constructor() {
    (this.storage = []), (this.head = 0), (this.tail = 0);
  }

  push_front(value) {
    if (this.storage[0]) {
      for (let i = this.storage.length; i > 0; i--) {
        this.storage[i] = this.storage[i - 1];
      }
    }
    this.storage[this.head] = value;
    this.tail++;
  }

  push_back(value) {
    this.storage[this.tail++] = value;
  }

  pop_front() {
    if (this.tail <= this.head) {
      return null;
    }
    return this.storage[this.head++];
  }

  pop_back() {
    if (this.tail <= this.head) {
      return null;
    }
    return this.storage[--this.tail];
  }

  getFront() {
    return this.storage[this.head];
  }

  getBack() {
    return this.storage[this.tail - 1];
  }

  find(value) {
    let count = 0;
    for (let i = this.head; i < this.tail; i++) {
      if (this.storage[i] === value) {
        return count;
      }
      count++;
    }
    return null;
  }

  size() {
    return this.tail - this.head;
  }

  print() {
    let deque = '';
    for (let i = this.head; i < this.tail; i++) {
      deque += this.storage[i] + ' ';
    }
    return deque.trim();
  }
}

let deque = new Deque();
for (let i = 1; i <= N; i++) {
  deque.push_back(i);
}

let remove = 0;
let num = 0;
let index = 0;
let count = 0;

while (true) {
  if (remove === M) break;
  num = deque.getFront();
  if (num === array[index]) {
    deque.pop_front();
    index++;
    remove++;
  } else {
    if (deque.find(array[index]) <= deque.size() / 2) {
      deque.push_back(deque.pop_front());
    } else {
      deque.push_front(deque.pop_back());
    }
    count++;
  }
}

console.log(count);
