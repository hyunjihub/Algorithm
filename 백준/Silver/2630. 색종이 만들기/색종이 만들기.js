const fs = require('fs');
let [N, ...array] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);

for (let i = 0; i < N; i++) {
  array[i] = array[i].trim().split(' ').map(Number);
}

let blue = 0;
let white = 0;

function div(x, y, length) {
  let count = 0;
  for (let i = x; i < x + length; i++) {
    for (let j = y; j < y + length; j++) {
      count += array[i][j];
    }
  }

  if (count === 0) white++;
  else if (count === length * length) blue++;
  else {
    div(x, y, length / 2);
    div(x, y + length / 2, length / 2);
    div(x + length / 2, y, length / 2);
    div(x + length / 2, y + length / 2, length / 2);
  }
}

div(0, 0, N);
console.log(white);
console.log(blue);
