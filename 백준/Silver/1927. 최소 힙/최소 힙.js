const fs = require('fs');
let [N, ...input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);

class minHeap {
  constructor() {
    this.heap = [null];
  }

  add(value) {
    this.heap.push(value);
    let current = this.heap.length - 1;
    let parent = Math.floor(current / 2);

    while (parent !== 0 && this.heap[parent] > value) {
      [this.heap[parent], this.heap[current]] = [this.heap[current], this.heap[parent]];
      current = parent;
      parent = Math.floor(current / 2);
    }
  }

  remove() {
    if (this.heap.length === 1) return 0;
    if (this.heap.length === 2) return this.heap.pop();

    let value = this.heap[1];
    this.heap[1] = this.heap.pop();

    let current = 1;
    let left = 2;
    let right = 3;
    while (
      (left < this.heap.length && this.heap[current] > this.heap[left]) ||
      (right < this.heap.length && this.heap[current] > this.heap[right])
    ) {
      if (right < this.heap.length && this.heap[left] > this.heap[right]) {
        [this.heap[right], this.heap[current]] = [this.heap[current], this.heap[right]];
        current = right;
      } else {
        [this.heap[left], this.heap[current]] = [this.heap[current], this.heap[left]];
        current = left;
      }
      left = current * 2;
      right = current * 2 + 1;
    }
    return value;
  }
}

let heap = new minHeap();
let answer = '';
for (let i = 0; i < N; i++) {
  input[i] = Number(input[i].trim());
  if (input[i] !== 0) heap.add(input[i]);
  else {
    answer += heap.remove() + '\n';
  }
}

console.log(answer.trim());
