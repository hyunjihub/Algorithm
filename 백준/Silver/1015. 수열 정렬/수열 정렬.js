const fs = require('fs');
const [n, input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const A = input.trim().split(' ');

let current = 0;
let counting = 0;
let answer = Array.from({ length: n });

while (true) {
  for (let i = 0; i < n; i++) {
    if (current === parseInt(A[i])) {
      answer[i] = counting++;
    }
  }
  if (counting >= n) break;
  current++;
}

console.log(answer.toString().replaceAll(',', ' '));
