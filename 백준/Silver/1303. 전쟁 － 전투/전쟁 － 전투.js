const fs = require('fs');
let [n, ...soldier] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let [N, M] = n.trim().split(' ').map(Number);
soldier = soldier.map((i) => i.trim().split(''));

let visited = Array.from({ length: M }, () => Array(N).fill(false));
let white = 0;
let blue = 0;

let move = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

function BFS(start) {
  let power = 0;
  let queue = [start];
  visited[start[0]][start[1]] = true;

  while (queue.length) {
    let [idY, idX] = queue.shift();
    let color = soldier[idY][idX];
    power++;

    for (let i = 0; i < 4; i++) {
      let newY = idY + move[i][0];
      let newX = idX + move[i][1];

      if (newY >= 0 && newY < M && newX >= 0 && newX < N) {
        if (!visited[newY][newX] && soldier[newY][newX] === color) {
          queue.push([newY, newX]);
          visited[newY][newX] = true;
        }
      }
    }
  }

  return power ** 2;
}

for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    if (!visited[i][j]) {
      let power = BFS([i, j]);
      if (soldier[i][j] === 'W') white += power;
      else blue += power;
    }
  }
}

console.log(white, blue);
