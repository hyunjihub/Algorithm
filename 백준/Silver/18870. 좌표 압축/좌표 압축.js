const fs = require('fs');
let [N, X] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);
X = X.trim().split(' ').map(Number);

let sorted = Array.from(new Set(X.slice(0))).sort((a, b) => a - b);

let map = new Map();
for (let i = 0; i < sorted.length; i++) {
  map.set(sorted[i], i);
}

let answer = '';
for (let i = 0; i < N; i++) {
  answer += map.get(X[i]) + ' ';
}

console.log(answer.trim());
