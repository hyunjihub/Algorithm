const fs = require('fs');
let [N, ...input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);
class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  push(value) {
    this.queue[this.rear] = value;
    this.rear++;
  }

  pop() {
    if (this.front === this.rear) return -1;
    let result = this.queue[this.front];
    this.front++;
    if (this.front === this.rear) {
      this.front = 0;
      this.rear = 0;
    }
    return result;
  }

  size() {
    return this.rear - this.front;
  }

  empty() {
    return this.front === this.rear ? 1 : 0;
  }

  getFront() {
    if (this.empty()) return -1;
    return this.queue[this.front];
  }

  getBack() {
    if (this.empty()) return -1;
    return this.queue[this.rear - 1];
  }
}

let queue = new Queue();
let answer = '';
for (let i = 0; i < N; i++) {
  let [command, value = null] = input[i].trim().split(' ');
  if (command === 'push') queue.push(Number(value));
  else if (command === 'pop') answer += queue.pop() + '\n';
  else if (command === 'size') answer += queue.size() + '\n';
  else if (command === 'empty') answer += queue.empty() + '\n';
  else if (command === 'front') answer += queue.getFront() + '\n';
  else answer += queue.getBack() + '\n';
}

console.log(answer.trim());
