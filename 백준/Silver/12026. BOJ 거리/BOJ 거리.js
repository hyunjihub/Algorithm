const fs = require('fs');
let [N, block] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

block = block.trim().split('');

let dp = Array.from({ length: N }, () => Infinity);
dp[0] = 0;

function getPrev(current) {
  if (current === 'B') {
    return 'J';
  } else if (current === 'O') {
    return 'B';
  } else return 'O';
}

for (let i = 1; i < N; i++) {
  let prev = getPrev(block[i]);
  for (let j = 0; j < i; j++) {
    if (prev === block[j]) {
      dp[i] = Math.min(dp[j] + (j - i) ** 2, dp[i]);
    }
  }
}

console.log(dp[N - 1]===Infinity?-1:dp[N - 1]);
