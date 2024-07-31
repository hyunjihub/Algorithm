const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let N = Number(input[0]);
let M = Number(input[1]);

function combination(n, r) {
  if (r > n) return 0;
  if (r === 0 || r === n) return 1;
  r = Math.min(r, n - r);

  let c = 1;
  for (let i = 0; i < r; i++) {
    c = (c * (n - i)) / (i + 1);
  }
  return c;
}

console.log(combination(M - 1, N - 1));
