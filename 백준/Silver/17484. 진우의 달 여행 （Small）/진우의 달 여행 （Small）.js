const fs = require('fs');
let [n, ...input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let N = parseInt(n.trim().split(' ')[0]);
let M = parseInt(n.trim().split(' ')[1]);

let matrix = Array.from({ length: N }, () => new Array(M));

let line = [];
for (let i = 0; i < N; i++) {
  line = input[i].trim().split(' ');
  for (let j = 0; j < M; j++) {
    matrix[i][j] = parseInt(line[j]);
  }
}

let sums = [];
let directions = [-1, 0, 1];
function DFS(depth, direction, x, sum) {
  if (x === -1 || x === M) {
    return 0;
  }
  sum += matrix[depth][x];
  if (depth === N - 1) {
    sums.push(sum);
    return;
  }

  for (let i = 0; i < 3; i++) {
    if (direction === directions[i]) continue;
    DFS(depth + 1, directions[i], x + directions[i], sum);
  }
}

for (let i = 0; i < M; i++) {
  DFS(0, -2, i, 0);
}

console.log(Math.min(...sums));
