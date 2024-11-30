const fs = require('fs');
let N = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = N.map(Number);

let max = Math.max(...N);
let dp = Array.from({ length: max + 1 }, () => 0);
dp[0] = 1;
dp[1] = 1;
dp[2] = 2;

for (let i = 3; i <= max; i++) {
  for (let j = 0; j < i; j++) {
    dp[i] += dp[i - j - 1] * dp[j];
  }
}

let answer = '';
for (let i = 0; i < N.length - 1; i++) {
  answer += dp[N[i]] + '\n';
}

console.log(answer.trim());
