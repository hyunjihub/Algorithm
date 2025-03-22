const fs = require('fs');
let K = fs.readFileSync(0, 'utf-8').toString().trim();
K = Number(K);

let n = 1;
let count = 0;

while (n < K) {
  n = n * 2;
}

let result = `${n} `;

while (K > 0) {
  if (K >= n) {
    K -= n;
  } else {
    n /= 2;
    count++;
  }
}

result += count;
console.log(result);
