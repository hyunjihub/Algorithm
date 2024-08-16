const fs = require('fs');
let [n, ...triangle] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

n = Number(n);

for (let i = 0; i < n; i++) {
  triangle[i] = triangle[i].trim().split(' ').map(Number);
}

let dp = Array.from({ length: n }, (_, index) => Array(index + 1).fill(0));
dp[0][0] = triangle[0][0];

for (let i = 1; i < n; i++) {
  for (let j = 0; j <= i; j++) {
    if (j === 0) {
      dp[i][j] = triangle[i][j] + dp[i - 1][j];
    } else if (j === i) {
      dp[i][j] = triangle[i][j] + dp[i - 1][j - 1];
    } else {
      dp[i][j] = triangle[i][j] + Math.max(dp[i - 1][j], dp[i - 1][j - 1]);
    }
  }
}

console.log(Math.max(...dp[n - 1]));
