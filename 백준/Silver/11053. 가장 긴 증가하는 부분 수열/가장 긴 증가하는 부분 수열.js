const fs = require('fs');
let [N, A] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);
A = A.trim().split(' ').map(Number);

let LIS = [];

for (let i = 0; i < N; i++) {
  let left = 0;
  let right = LIS.length;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (LIS[mid] < A[i]) left = mid + 1;
    else right = mid;
  }

  if (left === LIS.length) LIS.push(A[i]);
  else LIS[left] = A[i];
}

console.log(LIS.length);
