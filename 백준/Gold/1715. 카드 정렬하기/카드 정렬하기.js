const fs = require('fs');
let [N, ...group] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);
group = group.map(Number);

class MinHeap {
  constructor() {
    this.heap = [null];
  }

  enqueue(value) {
    this.heap.push(value);
    let current = this.heap.length - 1;
    let parent = Math.floor(current / 2);

    while (parent > 0 && this.heap[current] < this.heap[parent]) {
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

      if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
        smallest = left;
      }
      if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
        smallest = right;
      }
      if (smallest === current) break;
      [this.heap[current], this.heap[smallest]] = [this.heap[smallest], this.heap[current]];
      current = smallest;
    }

    return result;
  }

  getLength() {
    return this.heap.length - 1;
  }
}

const minHeap = new MinHeap();
for (let i = 0; i < group.length; i++) {
  minHeap.enqueue(group[i]);
}

let totalComparisons = 0;
while (minHeap.getLength() > 1) {
  const first = minHeap.dequeue();
  const second = minHeap.dequeue();

  const combined = first + second;
  totalComparisons += combined;

  minHeap.enqueue(combined);
}

console.log(totalComparisons);
