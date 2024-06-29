const fs = require('fs');
let [T, ...N] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(Number);

function countZerosInFactorial(num) {
  let count = 0;
  for (let i = 5; i <= num; i *= 5) {
    count += Math.floor(num / i);
  }
  return count;
}

let answer = '';
for (let i = 0; i < T; i++) {
  answer += countZerosInFactorial(N[i]) + '\n';
}

console.log(answer.trim());
