const fs = require('fs');
let [T, ...info] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let first = [500, 300, 200, 50, 30, 10];
let second = [512, 256, 128, 64, 32];

T = Number(T);
info = info.map((i) => i.trim().split(' ').map(Number));

function getFirstPrice(rank) {
  let sum = 0;
  for (let i = 1; i <= 6; i++) {
    sum += i;
    if (sum >= rank) return i;
  }
  return -1;
}

function getSecondPrice(rank) {
  let sum = 0;
  for (let i = 0; i < 5; i++) {
    sum += 2 ** i;
    if (sum >= rank) return i;
  }
  return -1;
}

let answer = '';
for (let i = 0; i < T; i++) {
  let [a, b] = info[i];

  let sum = 0;
  if (a > 0 && a <= 21) {
    sum += first[getFirstPrice(a) - 1];
  }
  if (b > 0 && b <= 31) {
    sum += second[getSecondPrice(b)];
  }

  if (sum !== 0) answer += sum + '0000\n';
  else answer += '0\n';
}

console.log(answer.trim());
