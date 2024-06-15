const fs = require('fs');
let [T, ...input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

T = Number(T);
let index = 0;
for (let i = 0; i < T; i++) {
  let N = Number(input[index++].trim());
  let array = input[index++].trim().split(' ').map(Number);
  let dp = Array.from({ length: N }, () => 0);
  dp[0] = array[0];
  for (let j = 1; j < N; j++) {
    dp[j] = Math.max(dp[j - 1] + array[j], array[j]);
  }

  console.log(Math.max(...dp));
}
