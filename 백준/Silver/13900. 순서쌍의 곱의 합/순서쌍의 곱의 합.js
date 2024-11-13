const fs = require('fs');
let [N, num] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);
num = num.trim().split(' ').map(BigInt);

let sum = 0n;
for (let i = 0; i < N; i++) {
  sum += num[i];
}

let answer = 0n;
for (let i = 0; i < N; i++) {
  sum -= num[i];
  answer += num[i] * sum;
}

console.log(answer.toString());
