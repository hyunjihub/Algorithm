var fs = require('fs');
let N = fs.readFileSync(0, 'utf-8').toString().trim();

N = Number(N);

let dp = Array.from({ length: N + 1 }, () => null);

dp[1] = 'CY';
dp[2] = 'SK';
dp[3] = 'CY';
dp[4] = 'SK';

for (let i = 5; i <= N; i++) {
  if (dp[i - 1] === 'CY' || dp[i - 3] === 'CY' || dp[i - 4] === 'CY') dp[i] = 'SK';
  else dp[i] = 'CY';
}

console.log(dp[N]);
