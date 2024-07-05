const fs = require('fs');
let [n, ...element] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let N = Number(n.trim().split(' ')[0]);
let M = Number(n.trim().split(' ')[1]);

let top = N * M;
let bottom = N * M;
let left = 0;
let front = 0;

for (let i = 0; i < element.length; i++) {
  element[i] = element[i].trim().split(' ').map(Number);
}

for (let i = 0; i < N; i++) {
  left += element[i][0];
  for (let j = 1; j < M; j++) {
    if (element[i][j] > element[i][j - 1]) {
      left += element[i][j] - element[i][j - 1];
    }
  }
}

for (let j = 0; j < M; j++) {
  front += element[0][j];
  for (let i = 1; i < N; i++) {
    if (element[i][j] > element[i - 1][j]) {
      front += element[i][j] - element[i - 1][j];
    }
  }
}

console.log(top + bottom + 2 * left + 2 * front);
