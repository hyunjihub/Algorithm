const fs = require('fs');
let [num, ...graph] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let [M, N] = num.split(' ').map(Number);
graph = graph.map((i) => i.trim().split(' ').map(Number));

const move = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

let queue = [];
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (graph[i][j] === 1) {
      queue.push([i, j, 0]); // y, x, day
    }
  }
}

let head = 0;
let day = 0;

while (head < queue.length) {
  const [y, x, d] = queue[head++];
  day = d;

  for (let i = 0; i < 4; i++) {
    const newY = y + move[i][0];
    const newX = x + move[i][1];

    if (newY >= 0 && newY < N && newX >= 0 && newX < M && graph[newY][newX] === 0) {
      graph[newY][newX] = 1;
      queue.push([newY, newX, d + 1]);
    }
  }
}

const isAllGrown = graph.flat().every((v) => v !== 0);
console.log(isAllGrown ? day : -1);
