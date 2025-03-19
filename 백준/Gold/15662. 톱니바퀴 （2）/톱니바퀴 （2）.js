const fs = require('fs');
let [T, ...info] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

T = Number(T);
let status = info.slice(0, T).map((i) => i.trim().split('').map(Number));
let K = Number(info[T]);
let move = info.slice(T + 1).map((i) => i.trim().split(' ').map(Number));

let isTurn;

function getIsTurn(num, direction) {
  isTurn[num] = [direction, true];

  if (num - 1 >= 0 && !isTurn[num - 1][1] && status[num][6] !== status[num - 1][2]) {
    getIsTurn(num - 1, direction * -1);
  }

  if (num + 1 < T && !isTurn[num + 1][1] && status[num][2] !== status[num + 1][6]) {
    getIsTurn(num + 1, direction * -1);
  }
}

function rotate() {
  for (let i = 0; i < T; i++) {
    if (isTurn[i][1]) {
      if (isTurn[i][0] === 1) {
        status[i].unshift(status[i].pop());
      } else if (isTurn[i][0] === -1) {
        status[i].push(status[i].shift());
      }
    }
  }
}

for (let i = 0; i < K; i++) {
  let [num, direction] = move[i];
  num--;

  isTurn = Array.from({ length: T }, () => [0, false]);
  getIsTurn(num, direction);
  rotate();
}

let sum = 0;
for (let i = 0; i < T; i++) {
  if (status[i][0] === 1) sum++;
}

console.log(sum);
