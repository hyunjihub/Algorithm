var fs = require('fs');
let K = fs.readFileSync(0, 'utf-8').toString().trim();

K = Number(K);

let dp = [];
dp[0] = [1, 0];

let a = 0;
let b = 0;
for (let i = 1; i <= K; i++) {
  a = dp[i - 1][0];
  b = dp[i - 1][1];
  dp[i] = [b, a + b];
}

console.log(dp[K].join(' '));
