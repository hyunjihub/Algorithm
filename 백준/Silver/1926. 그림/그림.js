const fs = require('fs');
let [input, ...paper] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let [n, m] = input.trim().split(' ').map(Number);
for (let i = 0; i < n; i++) {
  paper[i] = paper[i].trim().split(' ').map(Number);
}
let visited = Array.from({ length: n }, () => Array(m).fill(false));

let move = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

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
      if (newY >= 0 && newY < n && newX >= 0 && newX < m && paper[newY][newX] === 1 && !visited[newY][newX]) {
        visited[newY][newX] = true;
        queue.push([newY, newX]);
      }
    }
  }
  return count;
}

let count = 0;
let max = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (paper[i][j] === 1 && !visited[i][j]) {
      max = Math.max(max, BFS([i, j]));
      count++;
    }
  }
}

console.log(count);
console.log(max);
