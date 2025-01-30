const fs = require('fs');
let [N, M, ...fix] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);
M = Number(M);
fix = fix.map(Number);
fix.push(N + 1);

let start = 1;
let end = 1;
let answer = 1;

for (let i = 0; i < fix.length; i++) {
  let end = fix[i] - 1;
  let length = end - start + 1;

  if (length > 0) {
    let dp = Array.from({ length: length + 1 }, () => 0);
    dp[0] = 1;
    if (length >= 1) dp[1] = 1;
    if (length >= 2) dp[2] = 2;

    for (let j = 3; j <= length; j++) {
      dp[j] = dp[j - 1] + dp[j - 2];
    }

    answer *= dp[length];
  }
  start = fix[i] + 1;
}

console.log(answer);
