const fs = require('fs');
let [size, info, ...room] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let [N, M] = size.trim().split(' ').map(Number);
let [r, c, d] = info.trim().split(' ').map(Number);
room = room.map((i) => i.trim().split(' ').map(Number));

let count = 0;
while (true) {
  if (room[r][c] === 0) {
    room[r][c] = 2;
    count++;
  }

  if (
    (r + 1 < N && room[r + 1][c] === 0) ||
    (r - 1 >= 0 && room[r - 1][c] === 0) ||
    (c - 1 >= 0 && room[r][c - 1] === 0) ||
    (c + 1 < M && room[r][c + 1] === 0)
  ) {
    if (d === 0) d = 3;
    else if (d === 1) d = 0;
    else if (d === 2) d = 1;
    else d = 2;

    if (d === 0 && r - 1 >= 0 && room[r - 1][c] === 0) r = r - 1;
    else if (d === 1 && c + 1 < M && room[r][c + 1] === 0) c = c + 1;
    else if (d === 2 && r + 1 < N && room[r + 1][c] === 0) r = r + 1;
    else if (d === 3 && c - 1 >= 0 && room[r][c - 1] === 0) c = c - 1;
  } else {
    let backR = r;
    let backC = c;

    if (d === 0) backR = r + 1;
    else if (d === 1) backC = c - 1;
    else if (d === 2) backR = r - 1;
    else if (d === 3) backC = c + 1;

    if (room[backR][backC] === 1) break;

    r = backR;
    c = backC;
  }
}

console.log(count);
