const fs = require('fs');
let [input, T] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let [n, m] = input.trim().split(' ').map(Number);
T = T.trim().split(' ').map(BigInt);

let max = 0n;
let start = 0;
let end = 0;
let sum = 0n;

for (let i = 0; i < n; i++) {
  sum += T[i];
  end = i;
  if (end - start >= m) {
    sum -= T[start];
    start++;
  }
  max = max < sum ? sum : max;
}

console.log(max.toString());
