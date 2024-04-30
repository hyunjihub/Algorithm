const fs = require('fs');
let [n, input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let N = Number(n.trim().split(' ')[0]);
let K = Number(n.trim().split(' ')[1]);
let weights = input.trim().split(' ').map(Number);
weights.sort((a, b) => b - a);

let start = 0;
let end = 0;
let count = 0;
for (let i = 0; i < N - 1; i++) {
  start = i;
  end = start + 1;
  while (true) {
    if (end === weights.length) break;
    if (weights[start] < K) {
      if (weights[start] + weights[end] <= K) {
        weights[start] = K + 1;
        weights[end] = K + 1;
        count++;
      }
    }
    end++;
  }
}

console.log(count);
