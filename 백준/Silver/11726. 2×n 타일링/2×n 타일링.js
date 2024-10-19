var fs = require('fs');
let n = fs.readFileSync(0, 'utf-8').toString().trim();

n = Number(n);

if (n <= 2) console.log(n);
else {
  let dp = Array.from({ length: n + 1 }, () => 0);
  dp[1] = 1n;
  dp[2] = 2n;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  console.log((dp[n] % 10007n).toString());
}
