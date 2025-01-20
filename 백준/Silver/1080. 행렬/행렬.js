const fs = require('fs');
let [n, ...input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let [N, M] = n.trim().split(' ').map(Number);
let current = input.slice(0, N);
let goal = input.slice(N);
let diff = [];

for (let i = 0; i < N; i++) {
  current[i] = current[i].trim().split('').map(Number);
  goal[i] = goal[i].trim().split('').map(Number);
  let col = [];
  for (let j = 0; j < M; j++) {
    if (current[i][j] === goal[i][j]) col.push(0);
    else col.push(1);
  }
  diff.push(col);
}

let count = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (diff[i][j] === 1) {
      if (i + 2 < N && j + 2 < M) {
        for (let k = i; k < i + 3; k++) {
          for (let l = j; l < j + 3; l++) {
            diff[k][l] = diff[k][l] === 1 ? 0 : 1;
          }
        }
        count++;
      } else {
        count = -1;
        break;
      }
    }
  }
  if (count === -1) break;
}

console.log(count);
