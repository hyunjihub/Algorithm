const fs = require('fs');
let n = fs.readFileSync(0, 'utf-8').toString();

let [N, K] = n.trim().split(' ').map(BigInt);

let result = 1n;
let div = 1n;

K = N - K > K ? K : N - K;
while (K--) {
  result *= N;
  result /= div;

  N = N - 1n;
  div = div + 1n;
}

console.log((result % 10007n).toString());
