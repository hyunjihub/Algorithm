const fs = require('fs');
let [N, ...x] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);
x = x.map(Number);

class AbsoluteHeap {
  constructor() {
    this.heap = [];
  }

  add(x) {
    this.heap.push(x);
    this._heapifyUp();
  }

  remove() {
    if (this.heap.length === 0) {
      return 0;
    }

    const root = this.heap[0];
    const last = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = last;
      this._heapifyDown();
    }

    return root;
  }

  _heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this._compare(this.heap[index], this.heap[parentIndex]) < 0) {
        [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]]; // 교환
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  _heapifyDown() {
    let index = 0;
    const length = this.heap.length;

    while (index * 2 + 1 < length) {
      let leftChildIndex = index * 2 + 1;
      let rightChildIndex = index * 2 + 2;
      let smallerChildIndex = leftChildIndex;

      if (rightChildIndex < length && this._compare(this.heap[rightChildIndex], this.heap[leftChildIndex]) < 0) {
        smallerChildIndex = rightChildIndex;
      }

      if (this._compare(this.heap[smallerChildIndex], this.heap[index]) < 0) {
        [this.heap[index], this.heap[smallerChildIndex]] = [this.heap[smallerChildIndex], this.heap[index]]; // 교환
        index = smallerChildIndex;
      } else {
        break;
      }
    }
  }

  _compare(a, b) {
    const absA = Math.abs(a);
    const absB = Math.abs(b);
    if (absA === absB) {
      return a < b ? -1 : 1;
    }
    return absA - absB;
  }
}

let heap = new AbsoluteHeap();
let answer = [];
for (let i = 0; i < x.length; i++) {
  if (x[i] === 0) {
    answer.push(heap.remove());
  } else {
    heap.add(x[i]);
  }
}

console.log(answer.join('\n'));
