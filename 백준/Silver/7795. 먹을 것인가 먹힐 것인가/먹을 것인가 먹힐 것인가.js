const fs = require('fs');
let [cases, ...input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let index = 0;
let A = [];
let B = [];
let count = 0;
for (let i = 0; i < Number(cases); i++) {
  count = 0;
  index++;
  A = input[index++].trim().split(' ').map(Number);
  B = input[index++].trim().split(' ').map(Number);
  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);

  let current = 0;
  for (let j = 0; j < B.length; j++) {
    if (A[current] > B[j]) {
      count += A.length - current;
    }
    if (A[current] <= B[j]) {
      current++;
      j--;
    }
  }

  console.log(count);
}
