const fs = require('fs');
let [num, ...command] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let [N, M] = num.split(' ').map(Number);
command = command.map((i) => i.trim().split(' ').map(Number));

let train = Array.from({ length: N + 1 }, () => Array(20).fill(0));
for (let j = 0; j < M; j++) {
  let [num, i, x = null] = command[j];

  if (num === 1) {
    if (train[i][x - 1] === 0) train[i][x - 1] = 1;
  } else if (num === 2) {
    if (train[i][x - 1] === 1) train[i][x - 1] = 0;
  } else if (num === 3) {
    train[i].unshift(0);
    train[i].pop();
  } else {
    train[i].shift();
    train[i].push(0);
  }
}

let set = new Set();
for (let i = 1; i <= N; i++) {
  let status = train[i].join('-');
  if (!set.has(status)) {
    set.add(status);
  }
}

console.log(set.size);
