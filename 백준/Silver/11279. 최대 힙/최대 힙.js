const fs = require('fs');
let [N, ...input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);
class Maxheap {
  constructor() {
    this.heap = [null];
  }

  add(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);
    while (parentIndex !== 0 && this.heap[parentIndex] < value) {
      [this.heap[parentIndex], this.heap[currentIndex]] = [this.heap[currentIndex], this.heap[parentIndex]];
      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  remove() {
    if (this.heap.length === 2) return this.heap.pop();
    let value = this.heap[1];
    this.heap[1] = this.heap.pop();
    let currentIndex = 1;
    let left = 2;
    let right = 3;
    while (this.heap[currentIndex] < this.heap[left] || this.heap[currentIndex] < this.heap[right]) {
      if (this.heap[left] < this.heap[right]) {
        [this.heap[currentIndex], this.heap[right]] = [this.heap[right], this.heap[currentIndex]];
        currentIndex = right;
      } else {
        [this.heap[currentIndex], this.heap[left]] = [this.heap[left], this.heap[currentIndex]];
        currentIndex = left;
      }
      left = currentIndex * 2;
      right = left + 1;
    }
    return value;
  }

  size() {
    return this.heap.length;
  }

  get() {
    return this.heap;
  }
}

let heap = new Maxheap();
let num = 0;
let answer = '';
let max = 0;
for (let i = 0; i < N; i++) {
  num = Number(input[i].trim());
  if (num === 0) {
    if (heap.size() === 1) {
      answer += '0\n';
    } else {
      max = heap.remove();
      answer += max + '\n';
    }
  } else {
    heap.add(num);
  }
}

console.log(answer.trim());
