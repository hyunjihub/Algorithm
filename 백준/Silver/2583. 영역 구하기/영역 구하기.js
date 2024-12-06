const fs = require('fs');
let [n, ...oblong] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let [M, N, K] = n.trim().split(' ').map(Number);
let isOccupied = Array.from({ length: M }, () => Array(N).fill(false));
for (let i = 0; i < K; i++) {
  let [leftX, leftY, rightX, rightY] = oblong[i].trim().split(' ').map(Number);

  for (let j = M - rightY; j < M - leftY; j++) {
    for (let k = leftX; k < rightX; k++) {
      isOccupied[j][k] = true;
    }
  }
}

let direction = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

function BFS(start) {
  let queue = [start];
  let result = 0;
  isOccupied[start[0]][start[1]] = true;

  while (queue.length) {
    let current = queue.shift();
    result++;

    for (let i = 0; i < direction.length; i++) {
      let [idy, idx] = direction[i];
      let newY = current[0] + idy;
      let newX = current[1] + idx;

      if (newY >= 0 && newY < M && newX >= 0 && newX < N) {
        if (!isOccupied[newY][newX]) {
          isOccupied[newY][newX] = true;
          queue.push([newY, newX]);
        }
      }
    }
  }

  return result;
}

let answer = [];
for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    if (!isOccupied[i][j]) {
      answer.push(BFS([i, j]));
    }
  }
}

answer.sort((a, b) => a - b);

console.log(answer.length);
console.log(answer.join(' '));
