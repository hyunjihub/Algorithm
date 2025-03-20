const fs = require('fs');
let [...input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

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

let index = 0;
let move = [
  [0, 1],
  [0, -1],
  [-1, 0],
  [1, 0],
];

let answer = '';
let cases = 1;
while (true) {
  let N = Number(input[index++]);
  if (N === 0) break;
  let graph = Array.from({ length: N }, () => []);
  for (let j = 0; j < N; j++) {
    graph[j].push(...input[index++].trim().split(' ').map(Number));
  }

  let pq = new MinHeap();
  pq.enqueue([[0, 0], graph[0][0]]);
  let visited = Array.from({ length: N }, () => Array(N).fill(false));
  let distance = Array.from({ length: N }, () => Array(N).fill(Infinity));
  distance[0][0] = graph[0][0];

  while (pq.getSize() > 0) {
    let [[idY, idX], cost] = pq.dequeue();

    if (!visited[idY][idX]) {
      visited[idY][idX] = true;

      for (let j = 0; j < 4; j++) {
        let newY = idY + move[j][0];
        let newX = idX + move[j][1];

        if (
          newY >= 0 &&
          newY < N &&
          newX >= 0 &&
          newX < N &&
          !visited[newY][newX] &&
          distance[newY][newX] > cost + graph[newY][newX]
        ) {
          distance[newY][newX] = cost + graph[newY][newX];
          pq.enqueue([[newY, newX], cost + graph[newY][newX]]);
        }
      }
    }
  }
  answer += `Problem ${cases++}: ${distance[N - 1][N - 1]}` + '\n';
}

console.log(answer.trim());
