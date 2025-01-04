const fs = require('fs');
let [n, doll] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let [N, K] = n.trim().split(' ').map(Number);
doll = doll.split(' ').map(Number);
let min = Infinity;

let start = 0;

let lionIndex = [];
for (let i = 0; i < N; i++) {
  if (doll[i] === 1) {
    lionIndex.push(i);
    if (lionIndex.length - start > K) {
      start++;
    }
    if (lionIndex.length - start >= K) min = Math.min(min, lionIndex[lionIndex.length - 1] - lionIndex[start] + 1);
  }
}

console.log(min === Infinity ? -1 : min);
