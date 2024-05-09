const fs = require('fs');
let [n, ...commands] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

class Queue {
  constructor() {
    (this.storage = {}), (this.front = 0), (this.rear = 0);
  }

  size() {
    if (this.storage[this.rear] === undefined) return 0;
    else return this.rear - this.front + 1;
  }

  enqueue(value) {
    if (this.size() === 0) this.storage[0] = value;
    else {
      this.rear += 1;
      this.storage[this.rear] = value;
    }
  }

  dequeue() {
    let value = this.storage[this.front];
    delete this.storage[this.front];
    if (this.front === this.rear) {
      this.front = 0;
      this.rear = 0;
    } else this.front += 1;
    return value;
  }

  getFront() {
    return this.storage[this.front];
  }

  getBack() {
    return this.storage[this.rear];
  }
}

let queue = new Queue();
let answer = '';
for (let i = 0; i < commands.length; i++) {
  commands[i] = commands[i].trim().split(' ');
  if (commands[i][0] === 'push') {
    queue.enqueue(Number(commands[i][1]));
  } else if (commands[i][0] === 'pop') {
    if (queue.size() === 0) answer += -1 + '\n';
    else answer += queue.dequeue() + '\n';
  } else if (commands[i][0] === 'size') {
    answer += queue.size() + '\n';
  } else if (commands[i][0] === 'empty') {
    if (queue.size() === 0) answer += 1 + '\n';
    else answer += 0 + '\n';
  } else if (commands[i][0] === 'front') {
    if (queue.size() === 0) answer += -1 + '\n';
    else answer += queue.getFront() + '\n';
  } else if (commands[i][0] === 'back') {
    if (queue.size() === 0) answer += -1 + '\n';
    else answer += queue.getBack() + '\n';
  }
}

console.log(answer.trim());
