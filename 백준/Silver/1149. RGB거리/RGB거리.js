const fs = require('fs');
let [N, ...homeInfo] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);
for (let i = 0; i < N; i++) {
  homeInfo[i] = homeInfo[i].trim().split(' ').map(Number);
}

let dp = Array.from({ length: N }, () => Array(3).fill(Infinity));
dp[0][0] = homeInfo[0][0];
dp[0][1] = homeInfo[0][1];
dp[0][2] = homeInfo[0][2];

for (let i = 1; i < N; i++) {
  dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + homeInfo[i][0];
  dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + homeInfo[i][1];
  dp[i][2] = Math.min(dp[i - 1][1], dp[i - 1][0]) + homeInfo[i][2];
}

console.log(Math.min(...dp[N - 1]));
