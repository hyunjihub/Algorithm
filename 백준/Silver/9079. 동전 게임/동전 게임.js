const fs = require('fs');
let [T, ...input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let index = 0;
const directions = [
  [0, 1, 2], // 첫 번째 행
  [3, 4, 5], // 두 번째 행
  [6, 7, 8], // 세 번째 행
  [0, 3, 6], // 첫 번째 열
  [1, 4, 7], // 두 번째 열
  [2, 5, 8], // 세 번째 열
  [0, 4, 8], // 첫 번째 대각선 \
  [2, 4, 6], // 두 번째 대각선 /
];

function flip(state, positions) {
  for (const pos of positions) {
    state ^= 1 << pos;
  }
  return state;
}

function toBitMask(state) {
  let mask = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (state[i][j] === 'H') {
        mask |= 1 << (i * 3 + j);
      }
    }
  }
  return mask;
}

for (let i = 0; i < Number(T); i++) {
  let coins = [];
  for (let j = 0; j < 3; j++) {
    let coin = input[index++].trim().split(' ');
    coins.push(coin);
  }

  let intial = toBitMask(coins);
  let queue = [[intial, 0]];
  let visited = new Set();
  visited.add(intial);

  let found = false;

  while (queue.length > 0) {
    let [current, count] = queue.shift();

    if (current === 0b111111111 || current === 0b000000000) {
      console.log(count);
      found = true;
      break;
    }

    for (const dir of directions) {
      let next = flip(current, dir);
      if (!visited.has(next)) {
        visited.add(next);
        queue.push([next, count + 1]);
      }
    }
  }

  if (!found) console.log(-1);
}
