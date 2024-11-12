const fs = require('fs');
let [T, ...input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

T = Number(T);

let index = 0;
for (let i = 0; i < T; i++) {
  let N = Number(input[index++]);
  let stockPrice = input[index++].trim().split(' ').map(Number);

  let max = 0;
  let sum = 0;
  for (let j = N - 1; j >= 0; j--) {
    if (max < stockPrice[j]) {
      max = stockPrice[j];
    } else if (max > stockPrice[j]) {
      sum += max - stockPrice[j];
    }
  }

  console.log(sum);
}
