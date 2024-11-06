const fs = require('fs');
let [L, num, n] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

L = Number(L);
num = num.trim().split(' ').map(Number);
n = Number(n);

num.unshift(0);

num.sort((a, b) => a - b);
let answer = [];

for (let i = 0; i < L; i++) {
  if (num[i] <= n && n <= num[i + 1]) {
    for (let j = num[i] + 1; j < num[i + 1]; j++) {
      for (let k = j + 1; k < num[i + 1]; k++) {
        if (j <= n && n <= k) {
          answer.push([j, k]);
        }
      }
    }
  }
}

console.log(answer.length);
