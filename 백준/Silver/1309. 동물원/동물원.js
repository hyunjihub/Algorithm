var fs = require('fs');
let N = fs.readFileSync(0, 'utf-8').toString().trim();

N = Number(N);
let dp = Array.from({ length: N + 1 }, () => Array(3).fill(0));

dp[1][0] = 1;
dp[1][1] = 1;
dp[1][2] = 1;

for (let i = 2; i <= N; i++) {
  dp[i][0] = (dp[i - 1][0] + dp[i - 1][1] + dp[i - 1][2]) % 9901;
  dp[i][1] = (dp[i - 1][0] + dp[i - 1][2]) % 9901;
  dp[i][2] = (dp[i - 1][0] + dp[i - 1][1]) % 9901;
}

let sum = 0;
for (let i = 0; i < 3; i++) {
  sum += dp[N][i];
}

console.log(sum % 9901);
