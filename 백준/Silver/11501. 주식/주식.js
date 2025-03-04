const fs = require('fs');
let [T, ...input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

T = Number(T);
let index = 0;

let answer = '';
for (let i = 0; i < T; i++) {
  let N = Number(input[index++]);
  let stock = input[index++].trim().split(' ').map(Number);

  let max = stock[N - 1];
  let sum = 0;
  for (let i = N - 2; i >= 0; i--) {
    if (stock[i] < max) {
      sum += max - stock[i];
    } else if (stock[i] > max) {
      max = stock[i];
    }
  }

  answer += sum + '\n';
}

console.log(answer.trim());
