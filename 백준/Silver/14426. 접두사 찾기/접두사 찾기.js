const fs = require('fs');
let [num, ...input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let [N, M] = num.split(' ').map(Number);
let S = input.slice(0, N).map((i) => i.trim());
let check = input.slice(N).map((i) => i.trim());

let suffix = new Set();
for (let i = 0; i < S.length; i++) {
  let current = '';
  for (let j = 0; j < S[i].length; j++) {
    current += S[i][j];
    suffix.add(current);
  }
}

let count = 0;
for (let i = 0; i < check.length; i++) {
  if (suffix.has(check[i])) {
    count++;
  }
}

console.log(count);
