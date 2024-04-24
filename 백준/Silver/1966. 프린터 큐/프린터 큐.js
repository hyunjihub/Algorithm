const fs = require('fs');
let [cases, ...input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
cases = Number(cases);
let N = 0;
let M = 0;
let documents = [];

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

  current() {
    return this.storage[this.front];
  }

  get() {
    return this.isPirnt;
  }

  print() {
    console.log(this.storage);
  }
}

let line = 0;
for (let i = 0; i < cases; i++) {
  let queue = new Queue();
  N = Number(input[line].trim().split(' ')[0]);
  M = Number(input[line++].trim().split(' ')[1]);
  documents = input[line++].trim().split(' ').map(Number);

  for (let j = 0; j < documents.length; j++) {
    if (j === M) queue.enqueue(documents[j] + 10);
    else queue.enqueue(documents[j]);
  }

  documents.sort((a, b) => b - a);
  let index = 0;
  while (true) {
    if (documents.length === index) break;
    if (queue.current() === documents[index]) {
      queue.dequeue();
      index++;
    } else if (queue.current() % 10 === documents[index]) {
      queue.dequeue();
      index++;
      break;
    } else {
      queue.enqueue(queue.dequeue());
    }
  }
  console.log(index);
}
