var fs = require('fs');
let [N, ...floats] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);
let dp = Array.from({ length: N }, () => 1);
dp[0] = Number(floats[0]);
let max = dp[0];

for (let i = 1; i < N; i++) {
  floats[i] = Number(floats[i]);
  dp[i] = Math.max(floats[i], dp[i - 1] * floats[i]);
  max = Math.max(max, dp[i]);
}

console.log(max.toFixed(3));
