const fs = require('fs');
let [N, ...score] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);
score = score.map(Number);

if (N === 1) {
  console.log(score[0]);
} else if (N === 2) {
  console.log(score[0] + score[1]);
} else {
  let dp = Array(N + 1).fill(0);
  dp[1] = score[0];
  dp[2] = score[0] + score[1];
  dp[3] = score[2] + Math.max(score[0], score[1]);

  for (let i = 4; i <= N; i++) {
    dp[i] = score[i - 1] + Math.max(dp[i - 2], dp[i - 3] + score[i - 2]);
  }

  console.log(dp[N]);
}
