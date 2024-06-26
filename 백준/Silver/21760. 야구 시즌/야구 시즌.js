const fs = require('fs');
let [T, ...input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

T = Number(T);

let answer = '';
for (let i = 0; i < T; i++) {
  let max = 0;
  let [N, M, k, D] = input[i].trim().split(' ').map(Number);
  for (let A = 1; ; A++) {
    let B = A / k;
    if (B % 1 !== 0) continue;

    let inGame = N * (M - 1) * (A / 2) * M;
    let outGame = (N - 1) * M * N * M * (B / 2);
    let allGame = inGame + outGame;
    if (allGame > D) break;
    else if (D - max > D - allGame) max = allGame;
  }
  if (max === 0) answer += '-1' + '\n';
  else answer += max + '\n';
}

console.log(answer.trim());
