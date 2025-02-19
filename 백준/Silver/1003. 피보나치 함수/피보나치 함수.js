const fs = require('fs');
let [T, ...N] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

T = Number(T);
N = N.map(Number);
let dp = Array.from({ length: Math.max(...N) + 1 }, () => [0, 0, 0]);

dp[0] = [0, 1, 0];
dp[1] = [1, 0, 1];

for (let i = 2; i <= Math.max(...N); i++) {
  dp[i][0] = dp[i - 1][0] + dp[i - 2][0];
  dp[i][1] = dp[i - 1][1] + dp[i - 2][1];
  dp[i][2] = dp[i - 1][2] + dp[i - 2][2];
}

for (let i = 0; i < T; i++) {
  console.log(dp[N[i]].slice(1).join(' '));
}
