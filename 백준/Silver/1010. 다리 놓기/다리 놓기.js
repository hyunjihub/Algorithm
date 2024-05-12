const fs = require('fs');
let [T, ...input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let N = 0;
let M = 0;

let C = Array.from({ length: 31 }, () => Array.from({ length: 31 }).fill(0));
C[1][0] = 1;
C[1][1] = 1;

function combination(n, r) {
  if (C[n][r] > 0) {
    return C[n][r];
  }
  if (r === 0 || r === n) {
    return (C[n][r] = 1);
  } else {
    return (C[n][r] = combination(n - 1, r - 1) + combination(n - 1, r));
  }
}

for (let i = 0; i < Number(T); i++) {
  N = Number(input[i].trim().split(' ')[0]);
  M = Number(input[i].trim().split(' ')[1]);

  console.log(combination(M, N));
}
