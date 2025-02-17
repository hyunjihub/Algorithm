const fs = require('fs');
let [N, ...time] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);
time = time.map((i) => i.trim().split(' ').map(Number));
time.sort((a, b) => a[0] - b[0]);

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
      let left = current * 2;
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

  peek() {
    if (this.heap.length === 1) return null;
    return this.heap[1];
  }

  getSize() {
    return this.heap.length - 1;
  }
}

let minHeap = new MinHeap();
for (let i = 0; i < time.length; i++) {
  let [start, end] = time[i];
  if (minHeap.getSize() > 0 && minHeap.peek() <= start) {
    minHeap.dequeue();
    minHeap.enqueue(end);
  } else {
    minHeap.enqueue(end);
  }
}

console.log(minHeap.getSize());
