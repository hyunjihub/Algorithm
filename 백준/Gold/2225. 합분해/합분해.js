var fs = require('fs');
let input = fs.readFileSync(0, 'utf-8').toString().trim();

let [N, K] = input.trim().split(' ').map(Number);
let dp = Array.from({ length: N + 1 }, () => Array(K + 1).fill(0));
for (let i = 0; i <= N; i++) {
  dp[i][1] = 1;
}
for (let j = 0; j <= K; j++) {
  dp[1][j] = j;
}

for (let i = 2; i <= N; i++) {
  for (let j = 2; j <= K; j++) {
    dp[i][j] = (dp[i - 1][j] + dp[i][j - 1]) % 1000000000;
  }
}

console.log(dp[N][K]);
