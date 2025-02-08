const fs = require('fs');

let [n, ...maze] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
let [N, M] = n.trim().split(' ').map(Number);
maze = maze.map((i) => i.trim().split('').map(Number));

let move = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

function BFS() {
  let queue = [[0, 0, 1]];
  let visited = Array.from({ length: N }, () => Array(M).fill(false));
  visited[0][0] = true;

  while (queue.length) {
    let [idy, idx, count] = queue.shift();

    if (idy === N - 1 && idx === M - 1) return console.log(count);

    for (let i = 0; i < 4; i++) {
      let newY = idy + move[i][0];
      let newX = idx + move[i][1];

      if (newY >= 0 && newY < N && newX >= 0 && newX < M && maze[newY][newX] === 1 && !visited[newY][newX]) {
        visited[newY][newX] = true;
        queue.push([newY, newX, count + 1]);
      }
    }
  }
}

BFS();
