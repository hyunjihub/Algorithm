const fs = require('fs');
let [n, ...ml] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let [N, K] = n.trim().split(' ').map(Number);
ml = ml.map(Number);
ml.sort((a, b) => a - b);

let left = 0;
let right = ml[N - 1];
let mid = 0;

while (left <= right) {
  mid = Math.floor((left + right) / 2);
  let count = 0;
  for (let i = 0; i < N; i++) {
    count += Math.floor(ml[i] / mid);
  }

  if (count < K) {
    right = mid - 1;
  } else {
    left = mid + 1;
  }
}

console.log(right);
