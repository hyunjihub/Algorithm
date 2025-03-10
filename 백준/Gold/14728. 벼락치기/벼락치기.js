const fs = require('fs');
let [info, ...problem] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let [N, T] = info.trim().split(' ').map(Number);
problem = problem.map((i) => i.trim().split(' ').map(Number));
let dp = Array.from({ length: T + 1 }, () => 0);

for (let i = 0; i < N; i++) {
  let [K, S] = problem[i];

  for (let j = T; j >= K; j--) {
    dp[j] = Math.max(dp[j], dp[j - K] + S);
  }
}
console.log(Math.max(...dp));
