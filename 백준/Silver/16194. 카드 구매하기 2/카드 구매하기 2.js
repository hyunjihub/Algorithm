const fs = require('fs');
let [N, P] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);
P = P.trim().split(' ').map(Number);

let dp = Array.from({ length: N + 1 }, () => Infinity);
dp[0] = 0;

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= i; j++) {
    dp[i] = Math.min(dp[i], dp[i - j] + P[j - 1]);
  }
}

console.log(dp[N]);
