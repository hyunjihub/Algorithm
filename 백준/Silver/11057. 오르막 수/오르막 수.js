var fs = require('fs');
let N = fs.readFileSync(0, 'utf-8').toString().trim();

let dp = Array.from({ length: N + 1 }, () => Array(10).fill(0));

for (let i = 0; i < 10; i++) {
  dp[1][i] = 1;
}

for (let i = 2; i <= N; i++) {
  for (let j = 0; j < 10; j++) {
    for (let k = j; k < 10; k++) {
      dp[i][j] += dp[i - 1][k];
      dp[i][j] %= 10007;
    }
  }
}

let sum = 0;
for (let i = 0; i < 10; i++) {
  sum += dp[N][i];
  sum %= 10007;
}

console.log(sum);
