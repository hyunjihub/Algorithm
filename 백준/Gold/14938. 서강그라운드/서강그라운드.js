const fs = require('fs');
let [num, item, ...info] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let [n, m, r] = num.trim().split(' ').map(Number);
item = item.trim().split(' ').map(Number);
info = info.map((i) => i.trim().split(' ').map(Number));

let graph = Array.from({ length: n + 1 }, () => []);
for (let i = 0; i < r; i++) {
  let [a, b, l] = info[i];
  graph[a].push([b, l]);
  graph[b].push([a, l]);
}

class MinHeap {
  constructor() {
    this.heap = [null];
  }

  enqueue(value) {
    this.heap.push(value);
    let current = this.heap.length - 1;
    let parent = Math.floor(current / 2);

    while (parent > 0 && this.heap[current][1] < this.heap[parent][1]) {
      [this.heap[current], this.heap[parent]] = [this.heap[parent], this.heap[current]];
      current = parent;
      parent = Math.floor(current / 2);
    }
  }

  dequeue() {
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

function Dijsktra(start) {
  let distance = Array.from({ length: n + 1 }, () => Infinity);
  let visited = Array.from({ length: n + 1 }, () => false);
  distance[start] = 0;

  let pq = new MinHeap();
  pq.enqueue([start, 0]);
  while (pq.getSize() > 0) {
    let [current, cost] = pq.dequeue();

    if (!visited[current]) {
      visited[current] = true;

      for (let i = 0; i < graph[current].length; i++) {
        let [next, nextCost] = graph[current][i];
        if (distance[next] > cost + nextCost) {
          distance[next] = cost + nextCost;
          pq.enqueue([next, cost + nextCost]);
        }
      }
    }
  }

  return distance.slice(1);
}

function getCount(distance) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    if (distance[i] <= m) sum += item[i];
  }
  return sum;
}

let max = 0;
for (let i = 1; i <= n; i++) {
  let distance = Dijsktra(i);
  max = Math.max(max, getCount(distance));
}

console.log(max);
