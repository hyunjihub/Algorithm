const fs = require('fs');
let [N, ...paper] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);

for (let i = 0; i < N; i++) {
  paper[i] = paper[i].trim().split(' ').map(Number);
}

let first = 0;
let second = 0;
let third = 0;
function Div(x, y, length) {
  let start = paper[x][y];
  let isAll = true;
  for (let i = x; i < x + length; i++) {
    for (let j = y; j < y + length; j++) {
      if (start !== paper[i][j]) {
        isAll = false;
        break;
      }
    }
    if (!isAll) break;
  }
  if (isAll) {
    if (start === -1) first++;
    else if (start === 0) second++;
    else third++;
  } else {
    let newLength = length / 3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        Div(x + i * newLength, y + j * newLength, newLength);
      }
    }
  }
}

Div(0, 0, N);

console.log(first);
console.log(second);
console.log(third);
