var fs = require('fs');
let N = fs.readFileSync(0, 'utf-8').toString().trim();

N = Number(N);

dp = Array.from({ length: N + 1 }, () => Infinity);
dp[0] = 0;

for (let i = 1; i <= N; i++) {
  for (let j = 1; j * j <= i; j++) {
    dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
  }
}

console.log(dp[N]);
