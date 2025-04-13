const fs = require('fs');
let [num, ...priority] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let [N, K] = num.trim().split(' ').map(Number);
priority = priority.map((line) => line.trim().split(' ').map(Number));

const dp = Array(N + 1).fill(0);

for (let i = 0; i < K; i++) {
  const [score, time] = priority[i];
  for (let j = N; j >= time; j--) {
    dp[j] = Math.max(dp[j], dp[j - time] + score);
  }
}

console.log(Math.max(...dp));
