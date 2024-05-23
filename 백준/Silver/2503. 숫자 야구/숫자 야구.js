const fs = require('fs');
let [N, ...input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);
for (let i = 0; i < N; i++) {
  input[i] = input[i].trim().split(' ').map(Number);
}

let isPossible = true;
let possible = new Set();
for (let i = 123; i <= 987; i++) {
  isPossible = true;
  if ((i + '').indexOf('0') === -1) {
    if (
      (i + '').charAt(0) !== (i + '').charAt(1) &&
      (i + '').charAt(0) !== (i + '').charAt(2) &&
      (i + '').charAt(1) !== (i + '').charAt(2)
    ) {
      for (let j = 0; j < N; j++) {
        if (i === input[j][0] && input[j][1] < 3) isPossible = false;
      }
      if (isPossible) possible.add(i + '');
    } else continue;
  } else continue;
}

let strike = 0;
let ball = 0;
let num = '';
let count = 0;
possible.forEach((value) => {
  isPossible = true;
  for (let i = 0; i < N; i++) {
    num = input[i][0].toString();
    strike = 0;
    ball = 0;
    if (num.charAt(0) === value.charAt(0)) strike++;
    else if (num.indexOf(value.charAt(0)) >= 0) ball++;
    if (num.charAt(1) === value.charAt(1)) strike++;
    else if (num.indexOf(value.charAt(1)) >= 0) ball++;
    if (num.charAt(2) === value.charAt(2)) strike++;
    else if (num.indexOf(value.charAt(2)) >= 0) ball++;
    if (strike === input[i][1] && ball === input[i][2]) {
    } else {
      isPossible = false;
      break;
    }
  }
  if (isPossible) {
    count++;
  }
});

console.log(count);
