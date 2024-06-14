const fs = require('fs');
let [T, ...N] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

T = Number(T);
N = N.map((value) => Number(value));
let max = Math.max(...N);

let dp = Array.from({ length: max + 1 });
dp[1] = 1;
dp[2] = 1;
dp[3] = 1;
dp[4] = 2;
dp[5] = 2;
for (let i = 6; i <= max; i++) {
  dp[i] = dp[i - 1] + dp[i - 5];
}

let answer = '';
for (let i = 0; i < T; i++) {
  answer += dp[N[i]] + '\n';
}
console.log(answer.trim());
