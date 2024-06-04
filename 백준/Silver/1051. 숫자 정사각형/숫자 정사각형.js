const fs = require('fs');
let [n, ...input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let N = Number(n.trim().split(' ')[0]);
let M = Number(n.trim().split(' ')[1]);
let min = Math.min(N, M);

let square = Array.from({ length: N }, () => new Array(M));
for (let i = 0; i < N; i++) {
  input[i] = input[i].trim().split('').map(Number);
  for (let j = 0; j < M; j++) {
    square[i][j] = input[i][j];
  }
}

let max = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    let start = square[i][j];
    for (let k = 0; k < min; k++) {
      if (i + k >= N || j + k >= M) break;
      let width = square[i][j + k];
      let height = square[i + k][j];
      let end = square[i + k][j + k];
      if (width === height && height === end && end === start) {
        max = max < (k + 1) ** 2 ? (k + 1) ** 2 : max;
      }
    }
  }
}

console.log(max);
