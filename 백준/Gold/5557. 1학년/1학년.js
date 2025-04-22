const fs = require('fs');
let [N, num] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);
num = num.trim().split(' ').map(Number);

let dp = Array.from({ length: N - 1 }, () => Array(21).fill(0n));
dp[0][num[0]] = 1n;

for (let i = 1; i < N - 1; i++) {
  for (let j = 0; j <= 20; j++) {
    if (j + num[i] <= 20) dp[i][j + num[i]] += dp[i - 1][j];
    if (j - num[i] >= 0) dp[i][j - num[i]] += dp[i - 1][j];
  }
}

console.log(dp[N - 2][num[N - 1]].toString());
