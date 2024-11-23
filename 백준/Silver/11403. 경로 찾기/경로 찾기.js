const fs = require('fs');
let [N, ...matrix] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);
for (let i = 0; i < N; i++) {
  matrix[i] = matrix[i].trim().split(' ').map(Number);
}

for (let k = 0; k < N; k++) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (matrix[i][k] && matrix[k][j]) {
        matrix[i][j] = 1;
      }
    }
  }
}

matrix.forEach((row) => console.log(row.join(' ')));
