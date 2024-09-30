const fs = require('fs');
let [T, ...input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

T = Number(T);
let answer = '';

const directions = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

let index = 0;
for (let i = 0; i < T; i++) {
  let [M, N, K] = input[index++].trim().split(' ').map(Number);
  let earthworm = 0;

  let field = Array.from({ length: N }, () => Array(M).fill(0));
  let visited = Array.from({ length: N }, () => Array(M).fill(false));

  for (let j = 0; j < K; j++) {
    let [X, Y] = input[index++].trim().split(' ').map(Number);
    field[Y][X] = 1;
  }

  const BFS = (startX, startY) => {
    const queue = [[startX, startY]];
    visited[startY][startX] = true;

    while (queue.length > 0) {
      const [x, y] = queue.shift();

      for (let [dx, dy] of directions) {
        let newX = dx + x;
        let newY = dy + y;
        if (newY >= 0 && newY < N && newX >= 0 && newX < M && !visited[newY][newX] && field[newY][newX] === 1) {
          visited[newY][newX] = true;
          queue.push([newX, newY]);
        }
      }
    }
  };

  for (let y = 0; y < N; y++) {
    for (let x = 0; x < M; x++) {
      if (field[y][x] === 1 && !visited[y][x]) {
        BFS(x, y);
        earthworm++;
      }
    }
  }

  answer += earthworm + '\n';
}

console.log(answer.trim());
