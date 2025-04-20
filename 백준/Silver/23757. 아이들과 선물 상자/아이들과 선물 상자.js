const fs = require('fs');
let [num, c, w] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let [N, M] = num.split(' ').map(Number);
c = c.trim().split(' ').map(Number);
w = w.trim().split(' ').map(Number);

class MaxHeap {
  constructor() {
    this.heap = [null];
  }

  enqueue(value) {
    this.heap.push(value);
    let current = this.heap.length - 1;
    let parent = Math.floor(current / 2);

    while (parent > 0 && this.heap[current] > this.heap[parent]) {
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
      let biggest = current;

      if (left < this.heap.length && this.heap[left] > this.heap[biggest]) biggest = left;
      if (right < this.heap.length && this.heap[right] > this.heap[biggest]) biggest = right;

      if (current === biggest) break;
      [this.heap[current], this.heap[biggest]] = [this.heap[biggest], this.heap[current]];
      current = biggest;
    }

    return result;
  }

  peek() {
    if (this.heap.length === 1) return null;
    return this.heap[1];
  }
}

let maxHeap = new MaxHeap();
for (let i = 0; i < N; i++) {
  maxHeap.enqueue(c[i]);
}

let isPossible = true;
for (let i = 0; i < M; i++) {
  if (maxHeap.peek() >= w[i]) {
    let count = maxHeap.dequeue();
    if (count !== null && count - w[i] > 0) maxHeap.enqueue(count - w[i]);
  } else {
    isPossible = false;
    break;
  }
}

console.log(isPossible ? 1 : 0);
