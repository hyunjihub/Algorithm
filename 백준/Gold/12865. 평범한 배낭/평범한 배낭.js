const fs = require('fs');
let [input, ...info] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let [N, K] = input.trim().split(' ').map(Number);
info = info.map((i) => i.trim().split(' ').map(Number));
let dp = Array.from({ length: K + 1 }, () => 0);

for (let i = 0; i < N; i++) {
  let [W, V] = info[i];

  for (let w = K; w >= W; w--) {
    dp[w] = Math.max(dp[w], dp[w - W] + V);
  }
}

console.log(dp[K]);
