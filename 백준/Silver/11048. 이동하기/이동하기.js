const fs = require('fs');
let [n, ...candy] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let N = Number(n.trim().split(' ')[0]);
let M = Number(n.trim().split(' ')[1]);

const direction = [
  [1, 0],
  [0, 1],
  [1, 1],
];
let dp = Array.from({ length: N + 1 }, () => Array(M + 1).fill(0));

for (let i = 1; i <= N; i++) {
  candy[i - 1] = candy[i - 1].trim().split(' ').map(Number);
  for (let j = 1; j <= M; j++) {
    dp[i][j] = candy[i - 1][j - 1];
    let max = 0;
    for (let k = 0; k < direction.length; k++) {
      let ni = i - direction[k][0];
      let nj = j - direction[k][1];
      if (1 <= ni && ni <= N && 1 <= nj && nj <= M) {
        max = Math.max(max, dp[ni][nj]);
      }
    }
    dp[i][j] += max;
  }
}

console.log(dp[N][M]);
