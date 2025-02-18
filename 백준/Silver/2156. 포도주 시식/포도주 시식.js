const fs = require('fs');
let [n, ...drink] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

n = Number(n);
if (n === 1) {
  console.log(drink[0]);
} else {
  drink = drink.map(Number);
  let dp = Array.from({ length: n }, () => Array(2).fill(0));
  dp[0][0] = 0;
  dp[0][1] = drink[0];
  dp[1][0] = drink[0];
  dp[1][1] = drink[0] + drink[1];

  for (let i = 2; i < n; i++) {
    dp[i][0] = Math.max(dp[i - 1][1], dp[i - 1][0]);
    dp[i][1] = drink[i] + Math.max(dp[i - 2][1], dp[i - 2][0] + drink[i - 1]);
  }

  console.log(Math.max(...dp[n - 1]));
}
