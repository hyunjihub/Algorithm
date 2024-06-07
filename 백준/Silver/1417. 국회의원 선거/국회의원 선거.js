const fs = require('fs');
let [N, ...MP] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);

class MaxHeap {
  constructor(num) {
    this.heap = [];
    this.count = 0;
    this.num = num;
  }

  add(MP, value) {
    this.heap.push([value, MP]);
    let current = this.heap.length - 1;
    let parent = Math.floor((current - 1) / 2);
    while (current > 0 && this.heap[parent][0] < this.heap[current][0]) {
      [this.heap[parent], this.heap[current]] = [this.heap[current], this.heap[parent]];
      current = parent;
      parent = Math.floor((current - 1) / 2);
    }
  }

  remove() {
    if (this.num + this.count > this.heap[0][0]) return this.count;
    let value = this.heap[0];
    if (this.heap.length !== 1) {
      this.heap[0] = this.heap.pop();
      let current = 0;
      let left = current * 2 + 1;
      let right = left + 1;
      while (
        (this.heap[left] && this.heap[left][0] > this.heap[current][0]) ||
        (this.heap[right] && this.heap[right][0] > this.heap[current][0])
      ) {
        if (!this.heap[right] || this.heap[left][0] > this.heap[right][0]) {
          [this.heap[left], this.heap[current]] = [this.heap[current], this.heap[left]];
          current = left;
        } else {
          [this.heap[right], this.heap[current]] = [this.heap[current], this.heap[right]];
          current = right;
        }
        left = current * 2 + 1;
        right = left + 1;
      }
    } else {
      this.heap.pop();
    }
    this.add(value[1], value[0] - 1);
    this.count++;
    return -1;
  }

  get() {
    return this.heap;
  }
}

if (N === 1) {
  console.log(0);
} else {
  let heap = new MaxHeap(Number(MP[0].trim()));

  for (let i = 1; i < N; i++) {
    heap.add(i, Number(MP[i].trim()));
  }

  while (true) {
    let result = heap.remove();
    if (result !== -1) {
      console.log(result);
      break;
    }
  }
}
