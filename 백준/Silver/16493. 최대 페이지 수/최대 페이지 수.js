const fs = require('fs');
let [n, ...chapter] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let N = Number(n.trim().split(' ')[0]);
let M = Number(n.trim().split(' ')[1]);

for (let i = 0; i < M; i++) {
  chapter[i] = chapter[i].trim().split(' ').map(Number);
}

let dp = Array.from({ length: M + 1 }, () => Array(N + 1).fill(0));

for (let i = 1; i <= M; i++) {
  let [date, page] = chapter[i - 1];
  for (let j = 1; j <= N; j++) {
    if (j - date >= 0) {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - date] + page);
    } else dp[i][j] = dp[i - 1][j];
  }
}

console.log(dp[M][N]);
