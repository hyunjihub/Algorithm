var fs = require('fs');
let n = fs.readFileSync(0, 'utf-8').toString().trim();
n = BigInt(n);

let dp = [];
dp[1] = 1n;
dp[2] = 3n;

for (let i = 3; i <= n; i++) {
  dp[i] = dp[i - 1] + dp[i - 2] * 2n;
}

console.log((dp[n] % 10007n).toString());
