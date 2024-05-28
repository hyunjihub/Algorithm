var fs = require('fs');
let N = fs.readFileSync(0, 'utf-8').toString().trim();

N = Number(N.trim());

let dp = Array.from({ length: N + 1 });
dp[0] = null;
dp[1] = 'SK';
dp[2] = 'CY';
dp[3] = 'SK';
dp[4] = 'SK';

for (let i = 5; i <= N; i++) {
  if (dp[i - 1] === dp[i - 3] && dp[i - 1] === dp[i - 4]) {
    dp[i] = dp[i - 1] === 'SK' ? 'CY' : 'SK';
  } else {
    dp[i] = 'SK';
  }
}

console.log(dp[N]);