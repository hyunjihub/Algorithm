const fs = require('fs');
let [T, ...input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

T = Number(T);
let index = 0;
for (let i = 0; i < T; i++) {
  let n = Number(input[index++]);
  let sticker = [];
  sticker.push(input[index++].trim().split(' ').map(Number));
  sticker.push(input[index++].trim().split(' ').map(Number));
  let dp = Array.from({ length: 2 }, () => Array(n).fill(0));
  dp[0][0] = sticker[0][0];
  dp[1][0] = sticker[1][0];

  for (let j = 1; j < n; j++) {
    dp[0][j] = Math.max(dp[1][j - 1], j > 1 ? dp[1][j - 2] : 0) + sticker[0][j];
    dp[1][j] = Math.max(dp[0][j - 1], j > 1 ? dp[0][j - 2] : 0) + sticker[1][j];
  }

  console.log(Math.max(dp[0][n - 1], dp[1][n - 1]));
}
