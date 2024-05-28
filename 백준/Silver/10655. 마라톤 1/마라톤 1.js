const fs = require('fs');
let [N, ...checkPoints] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);
let dp = Array.from({ length: N }, () => Array(2).fill(Infinity));

function Manhattan(x, y) {
  x = x.trim().split(' ').map(Number);
  y = y.trim().split(' ').map(Number);

  return Math.abs(x[0] - y[0]) + Math.abs(x[1] - y[1]);
}

dp[0][0] = 0;
dp[0][1] = 0;

for (let i = 0; i < N - 1; i++) {
  dp[i + 1][0] = Math.min(dp[i + 1][0], dp[i][0] + Manhattan(checkPoints[i], checkPoints[i + 1]));
  if (i + 2 < N) {
    dp[i + 2][1] = Math.min(dp[i + 2][1], dp[i][0] + Manhattan(checkPoints[i], checkPoints[i + 2]));
  }
  dp[i + 1][1] = Math.min(dp[i + 1][1], dp[i][1] + Manhattan(checkPoints[i], checkPoints[i + 1]));
}

let shortest = Math.min(dp[N - 1][0], dp[N - 1][1]);

console.log(shortest);
