const fs = require('fs');
let [N, ...str] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);
let num = [];
for (let i = 0; i < N; i++) {
  str[i] = str[i]
    .trim()
    .replaceAll(/[^0-9]/g, '|')
    .split('|')
    .filter((item) => item !== '')
    .map(BigInt);
  num.push(...str[i]);
}

num.sort((a, b) => (a > b ? 1 : -1));

console.log(num.join('\n'));
