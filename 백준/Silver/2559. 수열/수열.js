const fs = require('fs');
let [n, seqeunce] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let [N, K] = n.trim().split(' ').map(Number);
seqeunce = seqeunce.trim().split(' ').map(Number);

let start = 0;
let end = start + K;
let sum = 0;
for (let i = start; i < end; i++) {
  sum += seqeunce[i];
}

let max = sum;

while (end < N) {
  sum -= seqeunce[start];
  start++;
  sum += seqeunce[end];
  end++;
  max = Math.max(max, sum);
}

console.log(max);
