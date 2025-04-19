const fs = require('fs');
let [N, ...graph] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);
graph = graph.map((i) => i.trim().split(''));
let move = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

let visited = Array.from({ length: N }, () => Array(N).fill(false));

function checkRedGreen(color1, color2) {
  if (color1 === 'R') {
    if (color2 === 'R' || color2 === 'G') return true;
  } else if (color1 === 'G') {
    if (color2 === 'R' || color2 === 'G') return true;
  } else {
    if (color2 === 'B') return true;
  }

  return false;
}

function BFS(start, type) {
  let queue = [start];
  visited[start[0]][start[1]] = true;

  while (queue.length) {
    let [idY, idX] = queue.shift();

    for (let i = 0; i < 4; i++) {
      let newY = idY + move[i][0];
      let newX = idX + move[i][1];

      if (newY >= 0 && newY < N && newX >= 0 && newX < N && !visited[newY][newX]) {
        if (type === 'common' && graph[idY][idX] === graph[newY][newX]) {
          visited[newY][newX] = true;
          queue.push([newY, newX]);
        } else if (type === 'red-green' && checkRedGreen(graph[idY][idX], graph[newY][newX])) {
          visited[newY][newX] = true;
          queue.push([newY, newX]);
        }
      }
    }
  }
}

let count1 = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!visited[i][j]) {
      BFS([i, j], 'common');
      count1++;
    }
  }
}

visited = Array.from({ length: N }, () => Array(N).fill(false));

let count2 = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!visited[i][j]) {
      BFS([i, j], 'red-green');
      count2++;
    }
  }
}

console.log(count1, count2);
