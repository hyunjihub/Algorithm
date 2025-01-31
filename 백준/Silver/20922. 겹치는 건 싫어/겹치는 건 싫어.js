const fs = require('fs');
let [n, a] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let [N, K] = n.trim().split(' ').map(Number);
a = a.trim().split(' ').map(Number);

let count = new Map();
let maxLength = 0;
let start = 0;

for (let i = 0; i < N; i++) {
  count.set(a[i], (count.get(a[i]) || 0) + 1);

  while (count.get(a[i]) > K) {
    count.set(a[start], count.get(a[start]) - 1);
    start++;
  }

  maxLength = Math.max(maxLength, i - start + 1);
}

console.log(maxLength);
