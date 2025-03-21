const fs = require('fs');
let [...score] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

score = score.map(Number);

let sum = 0;
for (let i = 0; i < score.length; i++) {
  sum += score[i];
}

let result = sum;
for (let i = score.length - 1; i >= 0; i--) {
  sum -= score[i];

  if (Math.abs(100 - result) >= Math.abs(100 - sum)) {
    if (Math.abs(100 - result) === Math.abs(100 - sum)) {
      result = Math.max(result, sum);
    } else {
      result = sum;
    }
  }
}

console.log(result);
