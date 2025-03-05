const fs = require('fs');
let [N, ...num] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);
num = num.map((i) => Number(i.trim()));

let dp = Array.from({ length: N }, () => 0);
dp[0] = num[0];

for (let i = 1; i < N; i++) {
  dp[i] = Math.max(dp[i - 1] * num[i], num[i]);
}

console.log(Math.max(...dp).toFixed(3));
