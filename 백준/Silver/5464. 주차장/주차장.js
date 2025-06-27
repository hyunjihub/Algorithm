const fs = require('fs');
let [n, ...input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let [N, M] = n.trim().split(' ').map(Number);
let price = input.slice(0, N).map(Number);
let weight = input.slice(N, N + M).map(Number);
let order = input.slice(N + M).map(Number);

class MinHeap {
  constructor(size) {
    this.heap = [null];
    for (let i = 1; i <= size; i++) {
      this.enqueue(i);
    }
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
    else if (this.heap.length === 2) return this.heap.pop();

    let value = this.heap[1];
    this.heap[1] = this.heap.pop();
    let current = 1;

    while (true) {
      let smallest = current;
      let left = current * 2;
      let right = left + 1;

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

    return value;
  }

  peek() {
    if (this.heap.length === 1) return null;
    else return this.heap[1];
  }
}

let park = new MinHeap(N);
let wait = [];
let parked = Array.from({ length: M + 1 }, () => null);
let total = 0;
for (let i = 0; i < order.length; i++) {
  if (order[i] < 0) {
    //leave
    let num = parked[Math.abs(order[i])];
    parked[Math.abs(order[i])] = null;
    park.enqueue(num);
    if (wait.length) {
      let car = wait.shift();
      let num = park.dequeue();
      parked[car] = num;
      total += price[num - 1] * weight[car - 1];
    }
  } else {
    //enter
    if (park.peek() === null) {
      wait.push(order[i]);
    } else {
      let num = park.dequeue();
      parked[order[i]] = num;
      total += price[num - 1] * weight[order[i] - 1];
    }
  }
}

console.log(total);
