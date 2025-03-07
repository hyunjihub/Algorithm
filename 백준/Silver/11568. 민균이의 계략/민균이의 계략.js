const fs = require('fs');
let [N, A] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);
A = A.trim().split(' ').map(Number);
let dp = Array.from({ length: N }, () => 1);
dp[0] = 1;

for (let i = 1; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (A[i] > A[j]) dp[i] = Math.max(dp[i], dp[j] + 1);
  }
}

console.log(Math.max(...dp));
