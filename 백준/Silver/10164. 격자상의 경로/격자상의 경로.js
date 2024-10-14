const fs = require('fs');
const [N, M, K] = fs.readFileSync(0, 'utf-8').toString().trim().split(' ').map(Number);

let array = Array.from({ length: N }, () => Array(M).fill(0));
let current = 1;
let stopover = [0, 0];
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (current === K) stopover = [i, j];
    array[i][j] = current++;
  }
}

const directions = [
  [0, 1], // 오른쪽
  [1, 0], // 아래
];

function BFS(start, end) {
  const queue = [start];
  let dp = Array.from({ length: N }, () => Array(M).fill(0));
  dp[start[0]][start[1]] = 1;

  while (queue.length) {
    const current = queue.shift();

    for (const [dx, dy] of directions) {
      const nx = current[0] + dx;
      const ny = current[1] + dy;

      if (nx < N && ny < M) {
        if (dp[nx][ny] === 0) queue.push([nx, ny]);
        dp[nx][ny] += dp[current[0]][current[1]];
      }
    }
  }

  return dp[end[0]][end[1]];
}

let minCount = 0;
if (K === 0) {
  minCount = BFS([0, 0], [N - 1, M - 1]);
} else {
  minCount = BFS([0, 0], stopover) * BFS(stopover, [N - 1, M - 1]);
}

console.log(minCount);
