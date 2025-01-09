const fs = require('fs');
let [n, ...input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let [N, M] = n.trim().split(' ').map(Number);
const board = input.slice(0, N).map((str) => str.split(' ').map(Number));
let dp = Array.from(Array(N + 1), () => new Array(N + 1).fill(0));

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    dp[i][j] = board[i - 1][j - 1] + dp[i][j - 1] + dp[i - 1][j] - dp[i - 1][j - 1];
  }
}

let ans = '';

for (let i = N; i < N + M; i++) {
  const [x1, y1, x2, y2] = input[i].split(' ').map(Number);
  ans += String(dp[x2][y2] - (dp[x1 - 1][y2] + dp[x2][y1 - 1]) + dp[x1 - 1][y1 - 1]) + '\n';
}

console.log(ans.trim());
