var fs = require('fs');
let N = fs.readFileSync(0, 'utf-8').toString().trim();
N = Number(N);

let dp = [0, 1, 1, 2, 2, 1, 2, 1];
for (let i = 8; i <= N; i++) {
  dp[i] = Math.min(dp[i - 1], dp[i - 2], dp[i - 5], dp[i - 7]) + 1;
}

console.log(dp[N]);