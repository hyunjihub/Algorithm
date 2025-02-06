const fs = require('fs');
let [n, ...input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let [N, E] = n.trim().split(' ').map(Number);
let [v1, v2] = input[input.length - 1].trim().split(' ').map(Number);

let graph = Array.from({ length: N + 1 }, () => []);
for (let i = 0; i < input.length - 1; i++) {
  let [a, b, c] = input[i].trim().split(' ').map(Number);
  graph[a].push([b, c]);
  graph[b].push([a, c]);
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

      if (left < this.heap.length && this.heap[left][1] < this.heap[smallest][1]) {
        smallest = left;
      }
      if (right < this.heap.length && this.heap[right][1] < this.heap[smallest][1]) {
        smallest = right;
      }

      if (smallest === current) break;
      [this.heap[current], this.heap[smallest]] = [this.heap[smallest], this.heap[current]];
      current = smallest;
    }

    return result;
  }

  getSize() {
    return this.heap.length - 1;
  }
}

function Dijkstra(start) {
  let distance = Array.from({ length: N + 1 }, () => Infinity);
  let visited = Array.from({ length: N + 1 }, () => false);
  let pq = new MinHeap();
  pq.enqueue([start, 0]);
  distance[start] = 0;

  while (pq.getSize() > 0) {
    let [node, cost] = pq.dequeue();

    if (!visited[node]) {
      visited[node] = true;

      for (let i = 0; i < graph[node].length; i++) {
        let [nextNode, nextCost] = graph[node][i];

        if (distance[nextNode] > cost + nextCost) {
          distance[nextNode] = cost + nextCost;
          pq.enqueue([nextNode, nextCost + cost]);
        }
      }
    }
  }

  return distance;
}

let toStart = Dijkstra(1);
let toV1 = Dijkstra(v1);
let toV2 = Dijkstra(v2);

let answer = Math.min(toStart[v1] + toV1[v2] + toV2[N], toStart[v2] + toV2[v1] + toV1[N]);
console.log(answer === Infinity ? -1 : answer);
