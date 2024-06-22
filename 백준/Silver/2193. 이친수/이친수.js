var fs = require('fs');
let N = fs.readFileSync(0, 'utf-8').toString().trim();

let dp = [];
dp[0] = 0n;
dp[1] = 1n;

for (let i = 2; i <= N; i++) {
  dp[i] = dp[i - 1] + dp[i - 2];
}

console.log(dp[N].toString());
