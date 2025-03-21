const fs = require('fs');
let [size, ...map] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let [N, M] = size.trim().split(' ').map(Number);
map = map.map((i) => i.trim().split(' ').map(Number));

let move = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

let virus = [];
let emptySpaces = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (map[i][j] === 2) virus.push([i, j]);
    if (map[i][j] === 0) emptySpaces.push([i, j]);
  }
}

function BFS() {
  let queue = [...virus];
  let tempMap = map.map((row) => [...row]);
  let visited = Array.from({ length: N }, () => Array(M).fill(false));

  while (queue.length) {
    let [idY, idX] = queue.shift();
    visited[idY][idX] = true;

    for (let i = 0; i < 4; i++) {
      let newY = idY + move[i][0];
      let newX = idX + move[i][1];

      if (newY >= 0 && newY < N && newX >= 0 && newX < M && tempMap[newY][newX] === 0 && !visited[newY][newX]) {
        tempMap[newY][newX] = 2;
        queue.push([newY, newX]);
      }
    }
  }

  let safeZone = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (tempMap[i][j] === 0) safeZone++;
    }
  }
  return safeZone;
}

let maxSafeZone = 0;

function DFS(index, count) {
  if (count === 3) {
    maxSafeZone = Math.max(maxSafeZone, BFS());
    return;
  }

  for (let i = index; i < emptySpaces.length; i++) {
    let [y, x] = emptySpaces[i];
    map[y][x] = 1;
    DFS(i + 1, count + 1);
    map[y][x] = 0;
  }
}

DFS(0, 0);
console.log(maxSafeZone);
