const fs = require('fs');
let [N, M, ...info] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);
M = Number(M);
let bus = info.slice(0, M).map((i) => i.trim().split(' ').map(Number));
let [start, end] = info.slice(M)[0].split(' ').map(Number);

class MinHeap {
  constructor() {
    this.heap = [null];
  }

  push(value) {
    this.heap.push(value);
    let current = this.heap.length - 1;
    let parent = Math.floor(current / 2);

    while (parent > 0 && this.heap[current][1] < this.heap[parent][1]) {
      [this.heap[current], this.heap[parent]] = [this.heap[parent], this.heap[current]];
      current = parent;
      parent = Math.floor(current / 2);
    }
  }

  pop() {
    if (this.heap.length === 1) return null;
    if (this.heap.length === 2) return this.heap.pop();

    let result = this.heap[1];
    this.heap[1] = this.heap.pop();
    let current = 1;

    while (true) {
      let left = 2 * current;
      let right = left + 1;
      let smallest = current;

      if (left < this.heap.length && this.heap[left][1] < this.heap[smallest][1]) smallest = left;
      if (right < this.heap.length && this.heap[right][1] < this.heap[smallest][1]) smallest = right;
      if (current === smallest) break;

      [this.heap[current], this.heap[smallest]] = [this.heap[smallest], this.heap[current]];
      current = smallest;
    }
    return result;
  }

  getSize() {
    return this.heap.length - 1;
  }
}

let busCost = Array.from({ length: N + 1 }, () => []);
for (let i = 0; i < M; i++) {
  let [a, b, c] = bus[i];
  busCost[a].push([b, c]);
}

let distance = Array.from({ length: N + 1 }, () => Infinity);
distance[start] = 0;
let visited = Array.from({ length: N + 1 }, () => false);
let pq = new MinHeap();
pq.push([start, 0]);

while (pq.getSize() > 0) {
  let [current, cost] = pq.pop();

  if (!visited[current]) {
    visited[current] = true;

    for (let i = 0; i < busCost[current].length; i++) {
      let [next, nextCost] = busCost[current][i];
      if (distance[next] > cost + nextCost) {
        distance[next] = cost + nextCost;
        pq.push([next, cost + nextCost]);
      }
    }
  }
}

console.log(distance[end]);
