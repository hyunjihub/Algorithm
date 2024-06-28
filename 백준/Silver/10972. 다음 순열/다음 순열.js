const fs = require('fs');
let [N, sequence] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);
sequence = sequence.trim().split(' ').map(Number);

let sort = [...sequence].sort((a, b) => b - a);
let answer = [];
let tail = [];
if (sequence.every((value, index) => value === sort[index])) {
  console.log(-1);
} else {
  let i = N - 2;
  while (sequence[i] > sequence[i + 1]) i--;
  let j = N - 1;
  while (sequence[i] > sequence[j]) j--;
  [sequence[i], sequence[j]] = [sequence[j], sequence[i]];
  answer = sequence.slice(0, i + 1);
  tail = sequence.slice(i + 1).sort((a, b) => a - b);
  answer = answer.concat(tail);
  console.log(answer.join(' '));
}
