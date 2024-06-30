const fs = require('fs');
let [N, ...input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);

for (let i = 0; i < N; i++) {
  input[i] = input[i].trim().split(' ').map(Number);
}

while (true) {
  let array = [];
  for (let i = 0; i < input.length; i += 2) {
    let row = [];
    for (let j = 0; j < input.length; j += 2) {
      let square = [input[i][j], input[i][j + 1], input[i + 1][j], input[i + 1][j + 1]];
      square.sort((a, b) => a - b);
      row.push(square[2]);
    }
    array.push(row);
  }
  input = array;
  N /= 2;
  if (N === 1) break;
}

console.log(input[0][0]);
