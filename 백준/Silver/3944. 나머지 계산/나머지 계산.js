const fs = require('fs');
let [T, ...n] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let answer = '';
for (let i = 0; i < T; i++) {
  let sum = 0;
  let [B, D] = n[i].trim().split(' ');
  for (let j = 0; j < D.length; j++) {
    sum += Number(D[j]);
  }
  answer += (sum % (Number(B) - 1)) + '\n';
}

console.log(answer.trim());
