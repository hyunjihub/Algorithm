const fs = require('fs');
let [n, ...map] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let [R, C, K] = n.trim().split(' ').map(Number);
for (let i = 0; i < R; i++) {
  map[i] = map[i].trim().split('');
}

let home = [0, C - 1];
let hansu = [R - 1, 0];

let direction = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

let count = 0;

function DFS(depth, current, visited) {
  if (depth === K) {
    if (current[0] === home[0] && current[1] === home[1]) {
      count++;
    }
    return;
  }

  for (let [idy, idx] of direction) {
    let newY = current[0] + idy;
    let newX = current[1] + idx;

    if (newX >= 0 && newX < C && newY >= 0 && newY < R) {
      if (map[newY][newX] === '.' && !visited[newY][newX]) {
        visited[newY][newX] = true;
        DFS(depth + 1, [newY, newX], visited);
        visited[newY][newX] = false;
      }
    }
  }
}

let visited = Array.from({ length: R }, () => Array(C).fill(false));
visited[hansu[0]][hansu[1]] = true;
DFS(1, hansu, visited);

console.log(count);
