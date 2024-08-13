const fs = require('fs');
let [n, ...space] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let N = Number(n.trim().split(' ')[0]);
let M = Number(n.trim().split(' ')[1]);

for (let i = 0; i < N; i++) {
  space[i] = space[i].trim().split(' ').map(Number);
}

const direction = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];

let safe = Array.from({ length: N }, () => Array(M).fill(Infinity));
let queue = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (space[i][j] === 1) {
      queue.push([i, j]);
      safe[i][j] = 0;
    }
  }
}

while (queue.length) {
  let [x, y] = queue.shift();

  for (let i = 0; i < direction.length; i++) {
    let nx = x + direction[i][0];
    let ny = y + direction[i][1];

    if (nx >= 0 && nx < N && ny >= 0 && ny < M && safe[nx][ny] > safe[x][y] + 1) {
      safe[nx][ny] = safe[x][y] + 1;
      queue.push([nx, ny]);
    }
  }
}

console.log(Math.max(...safe.flat()));
