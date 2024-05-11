const fs = require('fs');
let [n, A] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
let N = Number(n.trim().split(' ')[0]);
let M = Number(n.trim().split(' ')[1]);

A = A.trim().split(' ').map(Number);
let start = 0;
let end = 0;

let sum = A[0];
let answer = 0;
while (true) {
  if (end === N) break;
  if (sum === M) {
    sum -= A[start];
    start++;
    answer++;
  } else if (sum > M) {
    sum -= A[start];
    start++;
  } else {
    end++;
    sum += A[end];
  }
}

console.log(answer);
