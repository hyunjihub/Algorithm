const fs = require('fs');
let [n, ...info] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

class Queue {
  constructor() {
    this.queue = [];
    this.head = 0;
    this.tail = 0;
  }

  add(value) {
    this.queue[this.tail] = value;
    this.tail++;
  }

  remove() {
    if (this.tail === 0) return;
    let result = this.queue[this.head];
    this.head++;
    if (this.head === this.tail) {
      this.queue = [];
      this.head = 0;
      this.tail = 0;
    }
    return result;
  }

  size() {
    return this.tail - this.head;
  }
}

let [N, M, R] = n.trim().split(' ').map(Number);

let graph = Array.from({ length: N + 1 }, () => []);
let visited = Array.from({ length: N + 1 }, () => false);

for (let i = 0; i < M; i++) {
  let [u, v] = info[i].trim().split(' ').map(Number);
  graph[u].push(v);
  graph[v].push(u);
}

for (let i = 1; i <= N; i++) {
  graph[i].sort((a, b) => a - b);
}

let queue = new Queue();
queue.add(R);
visited[R] = true;

let order = Array.from({ length: N + 1 }, () => 0);
let count = 1;
order[R] = count++;

while (queue.size() > 0) {
  let current = queue.remove();
  for (let i of graph[current]) {
    if (!visited[i]) {
      visited[i] = true;
      queue.add(i);
      order[i] = count++;
    }
  }
}

console.log(order.slice(1).join(' '));
