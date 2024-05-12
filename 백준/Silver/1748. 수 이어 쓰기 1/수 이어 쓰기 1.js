var fs = require('fs');
let N = fs.readFileSync(0, 'utf-8').toString().trim();

let answer = 0;
let a = '';
let count = [9, 90 * 2, 900 * 3, 9000 * 4, 90000 * 5, 900000 * 6, 9000000 * 7, 90000000 * 8];
if (N.length === 1) {
  answer = Number(N);
} else {
  for (let i = 0; i < N.length - 1; i++) {
    answer += count[i];
    a += '9';
  }
  answer += (N - Number(a)) * N.length;
}

console.log(answer);
