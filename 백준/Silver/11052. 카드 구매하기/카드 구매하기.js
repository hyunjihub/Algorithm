const fs = require('fs');
let [N, P] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);
P = P.trim().split(' ').map(Number);

let dp = Array.from({ length: N }, () => 0);
dp[0] = P[0];

for (let i = 1; i < N; i++) {
  dp[i] = P[i];
  for (let j = 0; j < i; j++) {
    dp[i] = Math.max(dp[i], dp[j] + dp[i - j - 1]);
  }
}

console.log(dp[N - 1]);
