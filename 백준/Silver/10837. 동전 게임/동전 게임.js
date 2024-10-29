const fs = require('fs');
let [K, C, ...MN] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

K = Number(K);
C = Number(C);

let answer = '';
for (let i = 0; i < C; i++) {
  MN[i] = MN[i].trim().split(' ').map(Number);

  if (MN[i][0] === MN[i][1]) answer += 1 + '\n';
  else if (MN[i][0] < MN[i][1]) {
    let rest = K - MN[i][1];
    let winCount = MN[i][1] - MN[i][0];

    if (winCount - rest <= 1) {
      answer += 1 + '\n';
    } else answer += 0 + '\n';
  } else {
    let rest = K - MN[i][0];
    let winCount = MN[i][0] - MN[i][1];

    if (winCount - rest <= 2) {
      answer += 1 + '\n';
    } else answer += 0 + '\n';
  }
}

console.log(answer.trim());
