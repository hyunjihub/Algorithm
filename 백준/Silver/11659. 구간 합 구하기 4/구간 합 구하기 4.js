const fs = require('fs');
let [n, number, ...interval] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let [N, M] = n.trim().split(' ').map(Number);
number = number.trim().split(' ').map(Number);
let sum = [];

let current = 0;
for (let i = 0; i < N; i++) {
  current += number[i];
  sum.push(current);
}

let answer = '';
for (let k = 0; k < M; k++) {
  let [i, j] = interval[k].trim().split(' ').map(Number);
  answer += sum[j - 1] - (i === 1 ? 0 : sum[i - 2]) + '\n';
}

console.log(answer.trim());
