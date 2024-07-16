const fs = require('fs');
let [n, ...info] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let N = Number(n.trim().split(' ')[0]);
let M = Number(n.trim().split(' ')[1]);

let doyeon = [0, 0];
let person = [];
for (let i = 0; i < N; i++) {
  let dFind = info[i].indexOf('I');
  let pFind = info[i].indexOf('P');
  if (dFind !== -1) doyeon = [i, dFind];
  else if (pFind !== -1) person.push([i, pFind]);
  info[i] = info[i].trim().split('');
}

const directions = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

function BFS(start) {
  let queue = [start];
  let visited = Array.from({ length: N }, () => Array(M).fill(false));
  visited[start[0]][start[1]] = true;
  let count = 0;

  while (queue.length > 0) {
    let [x, y] = queue.shift();

    for (let [dx, dy] of directions) {
      let nx = x + dx;
      let ny = y + dy;

      if (nx >= 0 && nx < N && ny >= 0 && ny < M && !visited[nx][ny]) {
        if (info[nx][ny] !== 'X') {
          visited[nx][ny] = true;
          if (info[nx][ny] === 'P') {
            count++;
          }
          queue.push([nx, ny]);
        }
      }
    }
  }

  return count;
}

let result = BFS(doyeon);
console.log(result === 0 ? 'TT' : result);
