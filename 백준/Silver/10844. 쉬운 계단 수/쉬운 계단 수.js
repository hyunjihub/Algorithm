var fs = require('fs');
let N = fs.readFileSync(0, 'utf-8').toString().trim();

N = Number(N);

let DP = Array.from({ length: N + 1 }, () => Array(10).fill(0));
for (let i = 1; i < 10; i++) {
  DP[1][i] = 1;
}

for (let i = 2; i <= N; i++) {
  for (let j = 0; j < 10; j++) {
    if (j === 0) {
      DP[i][j] = DP[i - 1][1] % 1000000000;
    } else if (j === 9) {
      DP[i][j] = DP[i - 1][8] % 1000000000;
    } else {
      DP[i][j] = (DP[i - 1][j - 1] + DP[i - 1][j + 1]) % 1000000000;
    }
  }
}

let sum = 0;
for (let i = 0; i < 10; i++) {
  sum = (sum + DP[N][i]) % 1000000000;
}

console.log(sum);
