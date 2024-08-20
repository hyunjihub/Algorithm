const fs = require('fs');
let [N, sequence] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
sequence = sequence.trim().split(' ').map(Number);

let dp = Array.from({ length: N }, () => 0);
for (let i = 0; i < N; i++) {
  dp[i] = sequence[i];
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (sequence[j] < sequence[i]) {
      dp[i] = Math.max(dp[j] + sequence[i], dp[i]);
    }
  }
}

console.log(Math.max(...dp));
