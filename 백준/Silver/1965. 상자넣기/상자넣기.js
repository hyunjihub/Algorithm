const fs = require('fs');
let [n, boxs] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

n = Number(n);
boxs = boxs.trim().split(' ').map(Number);

dp = Array.from({ length: n }, () => 0);
dp[0] = 1;

for (let i = 1; i < n; i++) {
  let max = 0;
  for (let j = 0; j < i; j++) {
    if (boxs[j] < boxs[i]) max = Math.max(max, dp[j]);
  }
  dp[i] = max + 1;
}

console.log(Math.max(...dp));
