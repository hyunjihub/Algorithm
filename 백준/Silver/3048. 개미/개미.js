const fs = require('fs');
let [n, left, right, T] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

T = Number(T);
left = left
  .trim()
  .split('')
  .map((value) => [value, 'left']);
right = right
  .trim()
  .split('')
  .map((value) => [value, 'right']);

left.reverse();
let ants = left.concat(right);

for (let i = 0; i < T; i++) {
  for (let j = 0; j < ants.length - 1; j++) {
    if (ants[j][1] === 'left' && ants[j + 1][1] === 'right') {
      [ants[j], ants[j + 1]] = [ants[j + 1], ants[j]];
      j++;
    }
  }
}

let answer = '';
for (let i = 0; i < ants.length; i++) {
  answer += ants[i][0];
}
console.log(answer);
