const fs = require('fs');
let [T, ...n] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

T = Number(T);
n = n.map(Number);
let max = Math.max(...n);

const MOD = 1000000009;

let dp = Array.from({ length: max + 1 }, () => Array(4).fill(0));
dp[1][1] = 1;
dp[2][2] = 1;
dp[3][1] = 1;
dp[3][2] = 1;
dp[3][3] = 1;

for (let i = 4; i <= max; i++) {
  dp[i][1] = (dp[i - 1][2] + dp[i - 1][3]) % MOD;
  dp[i][2] = (dp[i - 2][1] + dp[i - 2][3]) % MOD;
  dp[i][3] = (dp[i - 3][1] + dp[i - 3][2]) % MOD;
}

let answer = '';
for (let i = 0; i < T; i++) {
  let sum = (dp[n[i]][1] + dp[n[i]][2] + dp[n[i]][3]) % MOD;
  answer += sum + '\n';
}

console.log(answer.trim());
