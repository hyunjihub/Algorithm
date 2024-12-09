const fs = require('fs');
let [T, ...n] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

T = Number(T);
for (let i = 0; i < T; i++) {
  n[i] = Number(n[i]);
}

let dp = Array.from({ length: Math.max(...n) + 1 }, () => Array(10).fill(0));
for (let i = 0; i < 10; i++) {
  dp[1][i] = 1;
}

for (let i = 2; i <= Math.max(...n); i++) {
  for (let j = 0; j < 10; j++) {
    for (let k = j; k < 10; k++) {
      dp[i][j] += dp[i - 1][k];
    }
  }
}

let answer = '';
for (let i = 0; i < T; i++) {
  let sum = 0;
  for (let j = 0; j < 10; j++) {
    sum += dp[n[i]][j];
  }
  answer += sum + '\n';
}

console.log(answer.trim());
