const fs = require('fs');
let [N, input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let number = [
  [
    [true, true, true],
    [true, false, true],
    [true, false, true],
    [true, false, true],
    [true, true, true],
  ],
  [
    [true, true, true],
    [true, true, true],
    [true, true, true],
    [true, true, true],
    [true, true, true],
  ],
  [
    [true, true, true],
    [false, false, true],
    [true, true, true],
    [true, false, false],
    [true, true, true],
  ],
  [
    [true, true, true],
    [false, false, true],
    [true, true, true],
    [false, false, true],
    [true, true, true],
  ],
  [
    [true, false, true],
    [true, false, true],
    [true, true, true],
    [false, false, true],
    [false, false, true],
  ],
  [
    [true, true, true],
    [true, false, false],
    [true, true, true],
    [false, false, true],
    [true, true, true],
  ],
  [
    [true, true, true],
    [true, false, false],
    [true, true, true],
    [true, false, true],
    [true, true, true],
  ],
  [
    [true, true, true],
    [false, false, true],
    [false, false, true],
    [false, false, true],
    [false, false, true],
  ],
  [
    [true, true, true],
    [true, false, true],
    [true, true, true],
    [true, false, true],
    [true, true, true],
  ],
  [
    [true, true, true],
    [true, false, true],
    [true, true, true],
    [false, false, true],
    [true, true, true],
  ],
];

N = Number(N);
let signal = Array.from({ length: 5 }, () => []);
let line = N / 5;
for (i = 0; i < 5; i++) {
  signal[i] = input.slice(line * i, line * (i + 1));
}

function isNumber(start) {
  for (let num = 0; num < 10; num++) {
    let match = true;

    for (let row = 0; row < 5; row++) {
      for (let col = 0; col < 3; col++) {
        if ((signal[row][start + col] === '#' ? true : false) !== number[num][row][col]) {
          match = false;
          break;
        }
      }
      if (!match) break;
    }

    if (match) return num;
  }
  return null;
}

function isOne(start) {
  for (let i = 0; i < 5; i++) {
    if (signal[i][start] !== '#') return false;
  }
  return true;
}

let answer = '';
for (let i = 0; i < line; i++) {
  let result = isNumber(i);
  if (result !== null) {
    answer += result;
    i += 3;
  } else if (isOne(i)) {
    answer += 1;
    i += 1;
  }
}

console.log(answer);
