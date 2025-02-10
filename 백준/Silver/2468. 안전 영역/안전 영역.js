const fs = require('fs');
let [N, ...height] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);
height = height.map((i) => i.trim().split(' ').map(Number));

let move = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

let visited = [];
function BFS(start, water) {
  let queue = [start];
  visited[start[0]][start[1]] = true;

  while (queue.length) {
    let [idy, idx] = queue.shift();
    for (let i = 0; i < 4; i++) {
      let newY = idy + move[i][0];
      let newX = idx + move[i][1];

      if (newY >= 0 && newY < N && newX >= 0 && newX < N && height[newY][newX] > water && !visited[newY][newX]) {
        queue.push([newY, newX]);
        visited[newY][newX] = true;
      }
    }
  }
}

let max = 0;
let water = 0;
while (true) {
  let count = 0;
  visited = Array.from({ length: N }, () => Array(N).fill(false));

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!visited[i][j] && height[i][j] > water) {
        BFS([i, j], water);
        count++;
      }
    }
  }

  max = Math.max(count, max);
  if (count === 0) {
    console.log(max);
    break;
  }
  water++;
}
