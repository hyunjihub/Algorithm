const fs = require('fs');
let input = fs.readFileSync(0, 'utf-8').toString().trim().split(' ');

let n = BigInt(input[0]);
let m = BigInt(input[1]);

function factorial(num) {
  let result = 1n;
  for (let i = num; i >= 1n; i--) {
    result = result * i;
  }
  return result;
}

let numerator = factorial(n);
let denominator = factorial(n - m) * factorial(m);

console.log((numerator / denominator).toString());
