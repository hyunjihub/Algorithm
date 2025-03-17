const fs = require('fs');
let [N, ...board] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);
board = board.map((i) => i.trim().split(' ').map(Number));

let DP = Array.from({ length: N }, () => Array(N).fill(0n));
DP[0][0] = 1n;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (board[i][j] === 0) continue;

    let newY = i + board[i][j];
    let newX = j + board[i][j];

    if (newY >= 0 && newY < N) {
      DP[newY][j] = DP[newY][j] + DP[i][j];
    }
    if (newX >= 0 && newX < N) {
      DP[i][newX] = DP[i][newX] + DP[i][j];
    }
  }
}

console.log(DP[N - 1][N - 1].toString());
