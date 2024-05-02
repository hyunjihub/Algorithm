const fs = require('fs');
let [n, ...board] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let N = Number(n.trim().split(' ')[0]);
let M = Number(n.trim().split(' ')[1]);

let W = 0;
let B = 0;
let Wdot = new Set();
let Bdot = new Set();
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    //시작이 W
    if (i % 2 === 0 && j % 2 === 0 && board[i].charAt(j) === 'B') {
      W++;
      Wdot.add(`${i},${j}`);
    } else if (i % 2 === 0 && j % 2 !== 0 && board[i].charAt(j) === 'W') {
      W++;
      Wdot.add(`${i},${j}`);
    } else if (i % 2 !== 0 && j % 2 === 0 && board[i].charAt(j) === 'W') {
      W++;
      Wdot.add(`${i},${j}`);
    } else if (i % 2 !== 0 && j % 2 !== 0 && board[i].charAt(j) === 'B') {
      W++;
      Wdot.add(`${i},${j}`);
    }
    //시작이 B
    if (i % 2 === 0 && j % 2 === 0 && board[i].charAt(j) === 'W') {
      B++;
      Bdot.add(`${i},${j}`);
    } else if (i % 2 === 0 && j % 2 !== 0 && board[i].charAt(j) === 'B') {
      B++;
      Bdot.add(`${i},${j}`);
    } else if (i % 2 !== 0 && j % 2 === 0 && board[i].charAt(j) === 'B') {
      B++;
      Bdot.add(`${i},${j}`);
    } else if (i % 2 !== 0 && j % 2 !== 0 && board[i].charAt(j) === 'W') {
      B++;
      Bdot.add(`${i},${j}`);
    }
  }
}

let Wcount = 0;
let Wmin = 251;
let Bcount = 0;
let Bmin = 251;
for (let i = 0; i < N - 7; i++) {
  for (let j = 0; j < M - 7; j++) {
    Wcount = 0;
    Bcount = 0;
    for (let k = i; k <= i + 7; k++) {
      for (let l = j; l <= j + 7; l++) {
        if (Wdot.has(`${k},${l}`)) {
          Wcount++;
        }
        if (Bdot.has(`${k},${l}`)) {
          Bcount++;
        }
      }
    }
    if (Wmin > Wcount) Wmin = Wcount;
    if (Bmin > Bcount) Bmin = Bcount;
  }
}

console.log(Math.min(Wmin, Bmin));