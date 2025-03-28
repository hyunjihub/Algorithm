const fs = require('fs');
let [N, K] = fs.readFileSync(0, 'utf-8').toString().trim().split(' ').map(Number);

class Dequeue {
  constructor() {
    this.dequeue = {};
    this.front = 0;
    this.tail = 0;
  }

  pushBack(value) {
    this.dequeue[this.tail++] = value;
  }

  popFront() {
    if (this.front === this.tail) return null;
    else {
      let result = this.dequeue[this.front++];
      if (this.front === this.tail) {
        this.front = 0;
        this.tail = 0;
      }
      return result;
    }
  }

  peek() {
    if (this.front === this.tail) return null;
    else return this.dequeue[this.front];
  }

  isEmpty() {
    return this.front === this.tail;
  }
}

let dequeue = new Dequeue();
let visited = new Array(100001).fill(false);
dequeue.pushBack([N, 0]);
visited[N] = true;

while (!dequeue.isEmpty()) {
  let [current, time] = dequeue.popFront();

  if (current === K) {
    console.log(time);
    break;
  }

  if (current + 1 <= 100000 && !visited[current + 1]) {
    visited[current + 1] = true;
    dequeue.pushBack([current + 1, time + 1]);
  }
  if (current - 1 >= 0 && !visited[current - 1]) {
    visited[current - 1] = true;
    dequeue.pushBack([current - 1, time + 1]);
  }
  if (current * 2 <= 100000 && !visited[current * 2]) {
    visited[current * 2] = true;
    dequeue.pushBack([current * 2, time + 1]);
  }
}
