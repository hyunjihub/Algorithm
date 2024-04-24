var fs = require('fs');
let N = fs.readFileSync(0, 'utf-8').toString().trim();
N = Number(N);

class Queue {
  constructor() {
    (this.storage = {}), (this.front = 0), (this.rear = 0);
  }

  size() {
    if (this.storage[this.rear] === undefined) return 0;
    else return this.rear - this.front + 1;
  }

  enqueue(value) {
    if (this.size() === 0) this.storage['0'] = value;
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
    } else {
      this.front += 1;
    }
    return value;
  }

  print() {
    for (let key in this.storage) {
      if (key !== undefined) console.log(this.storage[key]);
    }
  }
}

let queue = new Queue();
for (let i = 1; i <= N; i++) {
  queue.enqueue(i);
}

while (true) {
  if (queue.size() === 1) break;
  queue.dequeue();
  if (queue.size() === 1) break;
  queue.enqueue(queue.dequeue());
}

queue.print();
