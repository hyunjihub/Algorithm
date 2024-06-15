const fs = require('fs');
let [N, ...confettis] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);
let confetti = Array.from({ length: 100 }, () => new Array(100).fill(0));

for (let i = 0; i < N; i++) {
  confettis[i] = confettis[i].trim().split(' ').map(Number);
  let x = confettis[i][0];
  let y = confettis[i][1];
  for (let j = y; j < y + 10; j++) {
    for (let k = x; k < x + 10; k++) {
      confetti[j][k] = 1;
    }
  }
}

let count = 0;
for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 100; j++) {
    if (confetti[i][j] === 1) {
      if (i === 0 || confetti[i - 1][j] === 0) count++;
      if (i === 99 || confetti[i + 1][j] === 0) count++;
      if (j === 0 || confetti[i][j - 1] === 0) count++;
      if (j === 99 || confetti[i][j + 1] === 0) count++;
    }
  }
}

console.log(count);
