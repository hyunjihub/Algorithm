const fs = require('fs');
let [T, ...input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

T = Number(T);

let answer = '';
for (let i = 0; i < T; i++) {
  let [N, M, k, D] = input[i].trim().split(' ').map(Number);

  let numerator = 2 * D;
  let denominator = N * (M * (M - 1) * k + (N - 1) * M * M);

  let B = Math.floor(numerator / denominator);

  if (B < 1) {
    answer += '-1\n';
  } else {
    let A = k * B;
    let inGame = N * M * (M - 1) * (A / 2);
    let outGame = N * M * (N - 1) * M * (B / 2);
    let totalGame = inGame + outGame;
    answer += totalGame + '\n';
  }
}

console.log(answer.trim());
