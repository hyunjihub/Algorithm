const fs = require('fs');
let [N, hp, joy] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);
hp = hp.trim().split(' ').map(Number);
joy = joy.trim().split(' ').map(Number);

let enjoy = Array.from({ length: N + 1 }, () => Array(101).fill(0));

for (let i = 1; i <= N; i++) {
  let currentHP = hp[i - 1];
  let currentJoy = joy[i - 1];
  for (let j = 1; j <= 100; j++) {
    if (j - currentHP > 0) {
      enjoy[i][j] = Math.max(enjoy[i - 1][j], enjoy[i - 1][j - currentHP] + currentJoy);
    } else enjoy[i][j] = enjoy[i - 1][j];
  }
}

console.log(enjoy[N][100]);
