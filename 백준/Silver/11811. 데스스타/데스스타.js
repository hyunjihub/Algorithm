const fs = require('fs');
let [N, ...input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = parseInt(N);
let ai = Array.from({ length: N }, () => 0);
let matrix = Array.from({ length: N }, () => new Array(N).fill(0));
for (let i = 0; i < N; i++) {
  input[i] = input[i].trim().split(' ');
  for (let j = 0; j < N; j++) {
    if (i === j) continue;
    matrix[i][j] = parseInt(input[i][j].trim());
    if (ai[i] < (ai[i] | matrix[i][j])) {
      ai[i] |= matrix[i][j];
    }
  }
}

console.log(ai.toString().replaceAll(',', ' '));

