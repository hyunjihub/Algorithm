const fs = require('fs');
let [N, request, M] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);
request = request.trim().split(' ').map(Number);
M = Number(M);

request.sort((a, b) => b - a);

let left = 1;
let right = request[0];
let mid;

while (left <= right) {
  mid = Math.floor((left + right) / 2);
  let sum = 0;

  for (let i = 0; i < N; i++) {
    if (request[i] > mid) sum += mid;
    else sum += request[i];
  }

  if (sum > M) {
    right = mid - 1;
  } else {
    left = mid + 1;
  }
}

console.log(right);

