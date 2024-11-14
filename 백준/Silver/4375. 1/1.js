const fs = require('fs');
let n = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let answer = '';
for (let i = 0; i < n.length; i++) {
  n[i] = Number(n[i]);

  let remainder = 1 % n[i];
  let length = 1;
  let remainders = new Set();

  while (remainder !== 0) {
    if (remainders.has(remainder)) break;
    remainders.add(remainder);

    remainder = (remainder * 10 + 1) % n[i];
    length++;
  }

  answer += length + '\n';
}

console.log(answer.trim());
