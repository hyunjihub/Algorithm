const fs = require('fs');
let [T, ...input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

T = Number(T);
let index = 0;

let answer = '';
for (let i = 0; i < T; i++) {
  let N = Number(input[index++]);
  let coins = input[index++].trim().split(' ').map(Number);
  let M = Number(input[index++]);

  let dp = Array.from({ length: M + 1 }, () => 0);
  dp[0] = 1;

  for (let i = 0; i < N; i++) {
    for (let j = coins[i]; j <= M; j++) {
      dp[j] += dp[j - coins[i]];
    }
  }

  answer += dp[M] + '\n';
}

console.log(answer.trim());
