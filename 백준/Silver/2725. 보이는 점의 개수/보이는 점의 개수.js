const fs = require('fs');
let [C, ...N] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

C = Number(C);
N = N.map(Number);

function gcd(a, b) {
  while (a % b !== 0) {
    let tmp = b;
    b = a % b;
    a = tmp;
  }
  return b;
}

function preprocess(maxN) {
  let ans = new Array(maxN + 1).fill(0);
  ans[1] = 2;

  for (let i = 2; i <= maxN; ++i) {
    let n = 0;
    for (let j = 1; j <= i; ++j) {
      if (gcd(i, j) === 1) {
        ++n;
      }
    }
    ans[i] = ans[i - 1] + n;
  }

  return ans;
}

function solve(testCases) {
  const maxN = Math.max(...testCases);
  const ans = preprocess(maxN);
  let results = testCases.map((N) => ans[N] * 2 - 1);
  return results;
}

let results = solve(N);
results.forEach((result) => console.log(result));
