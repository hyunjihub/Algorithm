const fs = require('fs');
let [n, time] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let [N, M] = n.split(' ').map(Number);
time = time.split(' ').map(Number);

let left = Math.max(...time);
let right = time.reduce((a, b) => a + b, 0);

function isPossible(size) {
  let count = 1;
  let sum = 0;

  for (let i = 0; i < N; i++) {
    if (sum + time[i] > size) {
      count++;
      sum = time[i];
    } else {
      sum += time[i];
    }

    if (count > M) return false;
  }

  return true;
}

while (left <= right) {
  let mid = Math.floor((left + right) / 2);

  if (isPossible(mid)) {
    right = mid - 1;
  } else {
    left = mid + 1;
  }
}

console.log(left);
