const fs = require('fs');
let [n, ...pasture] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let R = Number(n.trim().split(' ')[0]);
let C = Number(n.trim().split(' ')[1]);

for (let i = 0; i < R; i++) {
  pasture[i] = pasture[i].trim().split('');
}

let isSafe = true;
for (let i = 0; i < R; i++) {
  for (let j = 0; j < C; j++) {
    if (pasture[i][j] === 'W') {
      if (i !== 0) {
        if (pasture[i - 1][j] === '.') pasture[i - 1][j] = 'D';
        else if (pasture[i - 1][j] === 'S') {
          isSafe = false;
          break;
        }
      }
      if (i !== R - 1) {
        if (pasture[i + 1][j] === '.') pasture[i + 1][j] = 'D';
        else if (pasture[i + 1][j] === 'S') {
          isSafe = false;
          break;
        }
      }
      if (j !== 0) {
        if (pasture[i][j - 1] === '.') pasture[i][j - 1] = 'D';
        else if (pasture[i][j - 1] === 'S') {
          isSafe = false;
          break;
        }
      }
      if (j !== C - 1) {
        if (pasture[i][j + 1] === '.') pasture[i][j + 1] = 'D';
        else if (pasture[i][j + 1] === 'S') {
          isSafe = false;
          break;
        }
      }
    }
  }
  if (!isSafe) {
    break;
  }
}

let answer = '';
if (isSafe) {
  console.log(1);
  for (let i = 0; i < R; i++) {
    answer += pasture[i].toString().replaceAll(',', '') + '\n';
  }
  console.log(answer.trim());
} else {
  console.log(0);
}
