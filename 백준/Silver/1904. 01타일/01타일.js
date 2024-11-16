var fs = require('fs');
let N = fs.readFileSync(0, 'utf-8').toString().trim();
N = Number(N);

let dp = Array.from({ length: N + 1 }, () => 0);
dp[1] = 1n;
dp[2] = 2n;

for (let i = 3; i <= N; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2]) % 15746n;
}

console.log(dp[N].toString());
