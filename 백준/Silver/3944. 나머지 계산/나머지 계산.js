const fs = require('fs');
let [T, ...input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

T = Number(T);
let answer = '';
for (let i = 0; i < T; i++) {
  let [B, D] = input[i].trim().split(' ');
  B = Number(B);

  let sum = 0;
  for (let j = 0; j < D.length; j++) {
    sum += Number(D[j]);
  }

  answer += (sum % (B - 1)) + '\n';
}

console.log(answer.trim());
