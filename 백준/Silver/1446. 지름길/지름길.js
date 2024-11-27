const fs = require('fs');
let [n, ...shortCut] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let [N, D] = n.trim().split(' ').map(Number);
let possibleShortCut = [];
for (let i = 0; i < N; i++) {
  let [start, end, length] = shortCut[i].trim().split(' ').map(Number);
  if (end <= D) {
    possibleShortCut.push([start, end, length]);
  }
}

possibleShortCut.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

let dp = Array(D + 1).fill(Infinity);
dp[0] = 0;

for (let i = 0; i <= D; i++) {
  if (i > 0) dp[i] = Math.min(dp[i], dp[i - 1] + 1);

  for (const [start, end, length] of possibleShortCut) {
    if (i === start) {
      dp[end] = Math.min(dp[end], dp[i] + length);
    } else if (i < start) {
      break;
    }
  }
}

console.log(dp[D]);
