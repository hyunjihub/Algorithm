const fs = require('fs');
let [num, info] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let [A, B, C, D] = num.trim().split(' ').map(Number);
let [P, M, N] = info.trim().split(' ').map(Number);

function getBark(start) {
  let count = 0;
  if (start % (A + B) !== 0 && start % (A + B) <= A) count++;
  if (start % (C + D) !== 0 && start % (C + D) <= C) count++;
  return count;
}

let answer = [];
answer.push(getBark(P));
answer.push(getBark(M));
answer.push(getBark(N));

console.log(answer.join('\n'));
