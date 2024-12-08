const fs = require('fs');
let [T, ...input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

T = Number(T);
let index = 0;
for (let i = 0; i < T; i++) {
  let N = Number(input[index++]);
  let coin = input[index++].trim().split(' ').map(Number);
  let M = Number(input[index++]);

  let dp = Array.from({ length: M + 1 }, () => 0);
  dp[0] = 1;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j <= M; j++) {
      if (j - coin[i] >= 0) dp[j] += dp[j - coin[i]];
    }
  }
  console.log(dp[M]);
}
