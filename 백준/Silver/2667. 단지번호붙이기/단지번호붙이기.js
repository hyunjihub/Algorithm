const fs = require('fs');
let [N, ...town] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);
town = town.map((i) => i.trim().split('').map(Number));

let move = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

let visited = Array.from({ length: N }, () => Array(N).fill(false));
function BFS(start) {
  let count = 0;
  let queue = [start];
  visited[start[0]][start[1]] = true;

  while (queue.length) {
    let [idy, idx] = queue.shift();
    count++;

    for (let i = 0; i < 4; i++) {
      let newY = idy + move[i][0];
      let newX = idx + move[i][1];

      if (newY >= 0 && newY < N && newX >= 0 && newX < N && town[newY][newX] === 1 && !visited[newY][newX]) {
        queue.push([newY, newX]);
        visited[newY][newX] = true;
      }
    }
  }

  return count;
}

let answer = [];
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (town[i][j] === 1 && !visited[i][j]) {
      answer.push(BFS([i, j]));
    }
  }
}

answer.sort((a, b) => a - b);

console.log(answer.length + '\n' + answer.join('\n'));
