var fs = require('fs');
let N = Number(fs.readFileSync(0, 'utf-8').toString().trim());

let dp = Array.from({ length: N + 1 }, () => Array(15).fill(0));
dp[0][0] = 1;

for (let i = 1; i <= N; i++) {
  for (let j = 0; j < 15; j++) {
    if (dp[i - 1][j] > 0) {
      dp[i][(j * 10 + 1) % 15] += dp[i - 1][j];
      dp[i][(j * 10 + 1) % 15] %= 1000000007;

      dp[i][(j * 10 + 5) % 15] += dp[i - 1][j];
      dp[i][(j * 10 + 5) % 15] %= 1000000007;
    }
  }
}

console.log(dp[N][0]);
