const fs = require('fs');
let input = fs.readFileSync(0, 'utf-8').toString().trim().split(' ');

let N = Number(input[0]);
let M = Number(input[1]);
let K = Number(input[2]);

function factorial(n) {
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

function combination(n, r) {
  if (n < r) return 0;
  return factorial(n) / (factorial(r) * factorial(n - r));
}

function possibility(n, m, k) {
  return (combination(m, k) * combination(n - m, m - k)) / combination(n, m);
}

let cases = 0;
for (let k = K; k <= M; k++) {
  cases += possibility(N, M, k);
}
console.log(cases);
