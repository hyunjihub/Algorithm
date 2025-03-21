const fs = require('fs');
let [N, ...command] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);
command = command.map((i) => i.trim().split(' ').map(Number));

class Dequeue {
  constructor() {
    this.dequeue = {};
    this.rear = 0;
    this.tail = 0;
  }

  isEmpty() {
    return this.rear === this.tail;
  }

  pushBack(value) {
    this.dequeue[this.tail] = value;
    this.tail++;
  }

  popBack() {
    if (this.isEmpty()) return -1;
    this.tail--;
    let result = this.dequeue[this.tail];

    if (this.rear === this.tail) {
      this.rear = 0;
      this.tail = 0;
    }
    return result;
  }

  pushFront(value) {
    if (this.isEmpty()) {
      this.dequeue[this.rear] = value;
      this.tail++;
    } else {
      this.rear--;
      this.dequeue[this.rear] = value;
    }
  }

  popFront() {
    if (this.isEmpty()) return -1;
    let result = this.dequeue[this.rear];
    this.rear++;

    if (this.rear === this.tail) {
      this.rear = 0;
      this.tail = 0;
    }
    return result;
  }

  peek() {
    if (this.isEmpty()) return [-1, -1];
    return [this.dequeue[this.rear], this.dequeue[this.tail - 1]];
  }

  getSize() {
    return this.tail - this.rear;
  }
}

let dequeue = new Dequeue();
let answer = [];

for (let i = 0; i < N; i++) {
  let [commandNum, value = null] = command[i];

  if (commandNum === 1) dequeue.pushFront(value);
  else if (commandNum === 2) dequeue.pushBack(value);
  else if (commandNum === 3) answer.push(dequeue.popFront());
  else if (commandNum === 4) answer.push(dequeue.popBack());
  else if (commandNum === 5) answer.push(dequeue.getSize());
  else if (commandNum === 6) answer.push(dequeue.isEmpty() ? 1 : 0);
  else if (commandNum === 7) answer.push(dequeue.peek()[0]);
  else if (commandNum === 8) answer.push(dequeue.peek()[1]);
}

console.log(answer.join('\n'));
