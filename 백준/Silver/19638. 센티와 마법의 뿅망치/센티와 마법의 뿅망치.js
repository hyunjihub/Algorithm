const fs = require('fs');
let [input, ...H] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let [N, centi, T] = input.trim().split(' ').map(Number);
H = H.map(Number);

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

      if (left < this.heap.length && this.heap[left] > this.heap[biggest]) {
        biggest = left;
      }
      if (right < this.heap.length && this.heap[right] > this.heap[biggest]) {
        biggest = right;
      }

      if (biggest === current) break;
      [this.heap[current], this.heap[biggest]] = [this.heap[biggest], this.heap[current]];
      current = biggest;
    }

    return result;
  }

  peek() {
    return this.heap[1];
  }

  getSize() {
    return this.heap.length - 1;
  }
}

let maxHeap = new MaxHeap();
for (let i = 0; i < N; i++) {
  maxHeap.enqueue(H[i]);
}

let count = 0;
while (true) {
  if (T === count) break;
  if (maxHeap.peek() < centi || maxHeap.peek() === 1) break;

  let big = maxHeap.dequeue();
  maxHeap.enqueue(Math.floor(big / 2));
  count++;
}

if (maxHeap.peek() < centi) {
  console.log('YES');
  console.log(count);
} else {
  console.log('NO');
  console.log(maxHeap.peek());
}
