const fs = require('fs');
let [N, A, M, num] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);
A = new Set(A.trim().split(' ').map(Number));
M = Number(M);
num = num.trim().split(' ').map(Number);

let answer = [];
for (let i = 0; i < M; i++) {
  if (A.has(num[i])) answer.push(1);
  else answer.push(0);
}

console.log(answer.join('\n'));
