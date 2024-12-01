const fs = require('fs');
let [input, a] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let [n, w, L] = input.trim().split(' ').map(Number);
a = a.trim().split(' ').map(Number);

let bridge = new Map();
let t = 1;
bridge.set(0, w);
let currentWeight = a[0];
let nextTruck = 1;

while (true) {
  if (bridge.size === 0 && nextTruck === n) break;

  for (let [num, remain] of bridge) {
    if (remain === 1) {
      currentWeight -= a[num];
      bridge.delete(num);
    } else {
      bridge.set(num, remain - 1);
    }
  }

  if (currentWeight + a[nextTruck] <= L) {
    bridge.set(nextTruck, w);
    currentWeight += a[nextTruck];
    nextTruck++;
  }
  t++;
}

console.log(t);
