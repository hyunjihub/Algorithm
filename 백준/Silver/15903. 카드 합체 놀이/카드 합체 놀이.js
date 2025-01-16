const fs = require('fs');
let [input, a] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let [n, m] = input.trim().split(' ').map(Number);
a = a.trim().split(' ').map(BigInt);

class MinHeap {
  constructor() {
    this.heap = [];
  }

  parent(index) {
    return Math.floor((index - 1) / 2);
  }

  leftChild(index) {
    return 2 * index + 1;
  }

  rightChild(index) {
    return 2 * index + 2;
  }

  swap(i, j) {
    const temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }

  heapifyUp(index) {
    let currentIndex = index;
    while (currentIndex > 0 && this.heap[currentIndex] < this.heap[this.parent(currentIndex)]) {
      this.swap(currentIndex, this.parent(currentIndex));
      currentIndex = this.parent(currentIndex);
    }
  }

  heapifyDown(index) {
    let currentIndex = index;
    let left = this.leftChild(currentIndex);
    let right = this.rightChild(currentIndex);
    let smallest = currentIndex;

    if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
      smallest = left;
    }

    if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
      smallest = right;
    }

    if (smallest !== currentIndex) {
      this.swap(currentIndex, smallest);
      this.heapifyDown(smallest);
    }
  }

  add(value) {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }

  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return min;
  }
}

let minHeap = new MinHeap();
for (let i = 0; i < n; i++) {
  minHeap.add(a[i]);
}

for (let i = 0; i < m; i++) {
  let num1 = minHeap.pop();
  let num2 = minHeap.pop();

  if (num1 !== null && num2 !== null) {
    let newVal = num1 + num2;
    minHeap.add(newVal);
    minHeap.add(newVal);
  }
}

let sum = 0n;
for (let i = 0; i < n; i++) {
  sum += minHeap.pop();
}

console.log(sum.toString());
