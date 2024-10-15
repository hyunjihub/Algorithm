const fs = require('fs');
let [n, sequence] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

n = Number(n);
sequence = sequence.trim().split(' ').map(Number);

dp = Array.from({ length: n }, () => 0);
dp[0] = sequence[0];

for (let i = 1; i < n; i++) {
  dp[i] = Math.max(dp[i - 1] + sequence[i], sequence[i]);
}

console.log(Math.max(...dp));
