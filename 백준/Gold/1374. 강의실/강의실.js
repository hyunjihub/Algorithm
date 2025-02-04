const fs = require('fs');
let [N, ...lecture] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);
lecture = lecture.map((i) => i.trim().split(' ').map(Number));
lecture.sort((a, b) => a[1] - b[1] || a[2] - b[2]);

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
      let right = current * 2 + 1;
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
    if (this.heap.length < 1) return null;
    return this.heap[1];
  }

  getSize() {
    return this.heap.length - 1;
  }
}

let room = new MinHeap();
room.enqueue(lecture[0][2]);

for (let i = 1; i < lecture.length; i++) {
  let [num, start, end] = lecture[i];

  if (room.peek() > start) {
    room.enqueue(end);
  } else {
    room.dequeue();
    room.enqueue(end);
  }
}

console.log(room.getSize());
