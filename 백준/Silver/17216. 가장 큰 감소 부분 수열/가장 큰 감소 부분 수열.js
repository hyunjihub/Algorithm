const fs = require('fs');
let [N, A] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);
A = A.trim().split(' ').map(Number);
let dp = [...A];
dp[0] = A[0];

let answer = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (A[i] < A[j]) dp[i] = Math.max(dp[i], dp[j] + A[i]);
    answer = Math.max(answer, dp[i]);
  }
}

console.log(answer);
