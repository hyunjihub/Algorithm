const fs = require('fs');
let [n, ...loc] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let move = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

let [N, M, K] = n.trim().split(' ').map(Number);
let graph = Array.from({ length: N }, () => Array(M).fill(0));
for (let i = 0; i < K; i++) {
  loc[i] = loc[i].trim().split(' ').map(Number);
  graph[loc[i][0] - 1][loc[i][1] - 1] = 1;
}

let visited = Array.from({ length: N }, () => Array(M).fill(false));
function BFS(start) {
  let size = 0;
  let queue = [start];
  visited[start[0]][start[1]] = true;

  while (queue.length) {
    let [idy, idx] = queue.shift();
    size++;

    for (let i = 0; i < move.length; i++) {
      let newY = idy + move[i][0];
      let newX = idx + move[i][1];

      if (newX >= 0 && newX < M && newY >= 0 && newY < N) {
        if (!visited[newY][newX] && graph[newY][newX] === 1) {
          queue.push([newY, newX]);
          visited[newY][newX] = true;
        }
      }
    }
  }

  return size;
}

let max = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (!visited[i][j] && graph[i][j] === 1) {
      max = Math.max(max, BFS([i, j]));
    }
  }
}

console.log(max);
