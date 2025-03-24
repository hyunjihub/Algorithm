const fs = require('fs');
let [N, ...S] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);
let L = S.slice(N)[0].split(' ');
S = S.slice(0, N).map((i) => i.trim().split(' '));

class Queue {
  constructor() {
    this.queue = {};
    this.rear = 0;
    this.tail = 0;
  }

  enqueue(value) {
    this.queue[this.tail++] = value;
  }

  dequeue() {
    if (this.rear === this.tail) return null;
    let result = this.queue[this.rear++];
    if (this.rear === this.tail) {
      this.rear = 0;
      this.tail = 0;
    }
    return result;
  }

  peek() {
    if (this.rear === this.tail) return null;
    return this.queue[this.rear];
  }
}

let parrot = Array.from({ length: N }, () => new Queue());
for (let i = 0; i < N; i++) {
  for (let j = 0; j < S[i].length; j++) {
    parrot[i].enqueue(S[i][j]);
  }
}

let answer = '';
let count = 0;
let current = 0;
while (true) {
  if (count === L.length) break;

  let isFind = false;
  for (let i = 0; i < N; i++) {
    if (parrot[i].peek() === L[current]) {
      answer += L[current] + ' ';
      current++;
      parrot[i].dequeue();
      isFind = true;
      break;
    }
  }

  if (!isFind) break;
  else count++;
}

let isAll = true;
for (let i = 0; i < N; i++) {
  if (parrot[i].peek() !== null) {
    isAll = false;
    break;
  }
}

if (isAll && answer.trim() === L.join(' ')) console.log('Possible');
else console.log('Impossible');
