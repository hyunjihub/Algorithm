var fs = require('fs');
let X = fs.readFileSync(0, 'utf-8').toString().trim();

X = Number(X);
let dp = Array.from({ length: X + 1 }, () => Infinity);
dp[X] = 0;

for (let i = X - 1; i >= 1; i--) {
  if (i + 1 <= X) {
    dp[i] = Math.min(dp[i], dp[i + 1] + 1);
  }
  if (i * 2 <= X) {
    dp[i] = Math.min(dp[i], dp[i * 2] + 1);
  }
  if (i * 3 <= X) {
    dp[i] = Math.min(dp[i], dp[i * 3] + 1);
  }
}

console.log(dp[1]);
