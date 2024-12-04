var fs = require('fs');
let N = fs.readFileSync(0, 'utf-8').toString().trim();

N = Number(N);

let dp = Array.from({ length: N + 1 }, () => 0);
let dpNum = Array.from({ length: N + 1 }, () => 0);
dp[1] = 0;

for (let i = 2; i <= N; i++) {
  dp[i] = dp[i - 1] + 1;
  dpNum[i] = i - 1;

  if (i % 2 === 0 && dp[i] > dp[i / 2] + 1) {
    dp[i] = dp[i / 2] + 1;
    dpNum[i] = i / 2;
  }

  if (i % 3 === 0 && dp[i] > dp[i / 3] + 1) {
    dp[i] = dp[i / 3] + 1;
    dpNum[i] = i / 3;
  }
}

console.log(dp[N]);
let path = [];
let current = N;
while (current > 0) {
  path.push(current);
  current = dpNum[current];
}

console.log(path.join(' '));
