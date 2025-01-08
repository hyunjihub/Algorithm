const fs = require('fs');
let [T, ...input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let move = [
  [-2, -1],
  [-1, -2],
  [-2, 1],
  [-1, 2],
  [1, -2],
  [1, 2],
  [2, -1],
  [2, 1],
];
T = Number(T);
let index = 0;

function BFS(start, dest, length) {
  let min = Infinity;
  let queue = [[start, 0]];
  let visited = Array.from({ length: length }, () => Array(length).fill(false));
  visited[start[0]][start[1]] = true;

  while (queue.length) {
    let [[idy, idx], count] = queue.shift();
    if (idy === dest[0] && idx === dest[1]) {
      min = Math.min(min, count);
    }

    for (let i = 0; i < move.length; i++) {
      if (idy + move[i][0] >= 0 && idy + move[i][0] < length && idx + move[i][1] >= 0 && idx + move[i][1] < length) {
        if (!visited[idy + move[i][0]][idx + move[i][1]]) {
          visited[idy + move[i][0]][idx + move[i][1]] = true;
          queue.push([[idy + move[i][0], idx + move[i][1]], count + 1]);
        }
      }
    }
  }

  return min;
}

let answer = '';
for (let i = 0; i < T; i++) {
  let length = Number(input[index++]);
  let current = input[index++].trim().split(' ').map(Number);
  let dest = input[index++].trim().split(' ').map(Number);

  answer += BFS(current, dest, length) + '\n';
}

console.log(answer.trim());
