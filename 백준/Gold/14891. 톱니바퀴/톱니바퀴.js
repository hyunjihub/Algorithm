const fs = require('fs');
let input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let cogwheel = input.slice(0, 4).map((i) => i.trim().split('').map(Number));
let K = Number(input[4]);
let info = input.slice(5).map((i) => i.trim().split(' ').map(Number));

function rotateWheel(num, direction) {
  if (direction === 1) {
    cogwheel[num].unshift(cogwheel[num].pop());
  } else {
    cogwheel[num].push(cogwheel[num].shift());
  }
}

function getState(num, direction) {
  rotated[num] = true;

  if (num > 0 && !rotated[num - 1] && cogwheel[num][6] !== cogwheel[num - 1][2]) {
    getState(num - 1, direction * -1);
  }

  if (num < 3 && !rotated[num + 1] && cogwheel[num][2] !== cogwheel[num + 1][6]) {
    getState(num + 1, direction * -1);
  }

  rotateWheel(num, direction);
}

for (let i = 0; i < K; i++) {
  let [num, direction] = info[i];
  num -= 1;
  rotated = Array(4).fill(false);
  getState(num, direction);
}

function getScore() {
  let score = 0;
  for (let i = 0; i < 4; i++) {
    if (cogwheel[i][0] === 1) {
      score += 2 ** i;
    }
  }
  return score;
}

console.log(getScore());
