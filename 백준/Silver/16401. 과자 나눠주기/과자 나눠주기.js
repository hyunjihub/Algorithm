const fs = require('fs');
let [n, lengths] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let [M, N] = n.trim().split(' ').map(Number);
lengths = lengths.trim().split(' ').map(Number);
lengths.sort((a, b) => a - b);

let left = 1;
let right = lengths[N - 1];

while (left <= right) {
  let mid = Math.floor((left + right) / 2);

  let sum = 0;
  for (let length of lengths) {
    sum += Math.floor(length / mid);
  }

  if (sum < M) right = mid - 1;
  else left = mid + 1;
}

console.log(right);
