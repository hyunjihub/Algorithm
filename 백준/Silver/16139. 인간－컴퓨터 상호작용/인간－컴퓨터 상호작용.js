const fs = require('fs');
let [S, q, ...question] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

q = Number(q);
question = question.map((i) => i.trim().split(' '));
let sum = Array.from({ length: 26 }, () => Array(S.length + 1).fill(0));

for (let i = 0; i < S.length; i++) {
  let alpha = S.charCodeAt(i) - 97;
  for (let j = 0; j < 26; j++) {
    sum[j][i + 1] = sum[j][i] + (j === alpha ? 1 : 0);
  }
}

let answer = '';
for (let i = 0; i < q; i++) {
  let [a, l, r] = question[i];
  l = Number(l);
  r = Number(r);
  a = a.charCodeAt(0) - 97;

  answer += sum[a][r + 1] - sum[a][l] + '\n';
}

console.log(answer.trim());
