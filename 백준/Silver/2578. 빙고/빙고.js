const fs = require('fs');
let input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let bingo = Array.from({ length: 5 }, () => Array(5));
for (let i = 0; i < 5; i++) {
  input[i] = input[i].trim().split(' ').map(Number);
  bingo[i] = input[i];
}

let number = [];
for (let i = 5; i < input.length; i++) {
  input[i] = input[i].trim().split(' ').map(Number);
  number.push(...input[i]);
}

function vertical(index) {
  for (let i = 0; i < 5; i++) {
    if (bingo[i][index] !== null) return false;
  }
  return true;
}

function horizontal(index) {
  for (let i = 0; i < 5; i++) {
    if (bingo[index][i] !== null) return false;
  }
  return true;
}

function diagonal1() {
  let y = 0;
  let x = 4;
  for (let i = 0; i < 5; i++) {
    if (bingo[y][x] !== null) return false;
    y++;
    x--;
  }
  return true;
}

function diagonal2() {
  let y = 4;
  let x = 0;
  for (let i = 0; i < 5; i++) {
    if (bingo[y][x] !== null) return false;
    y--;
    x++;
  }
  return true;
}

let x = 0;
let y = 0;
let count = 0;
for (let i = 0; i < number.length; i++) {
  for (let j = 0; j < 5; j++) {
    let contain = bingo[j].indexOf(number[i]);
    if (contain !== -1) {
      x = contain;
      y = j;
      break;
    }
  }
  bingo[y][x] = null;

  if (
    (y === 0 && x === 4) ||
    (y === 1 && x === 3) ||
    (y === 2 && x === 2) ||
    (y === 3 && x === 2) ||
    (y === 4 && x === 1)
  ) {
    if (diagonal1()) count++;
  }
  if (
    (y === 4 && x === 0) ||
    (y === 3 && x === 1) ||
    (y === 2 && x === 2) ||
    (y === 2 && x === 3) ||
    (y === 1 && x === 4)
  ) {
    if (diagonal2()) count++;
  }
  if (vertical(x)) count++;
  if (horizontal(y)) count++;
  if (count >= 3) {
    console.log(i + 1);
    break;
  }
}
