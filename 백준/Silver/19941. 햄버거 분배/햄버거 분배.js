const fs = require('fs');
let [n, input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let N = Number(n.trim().split(' ')[0]);
let K = Number(n.trim().split(' ')[1]);

const desk = input.trim().split('');

let eat = 0;
for (let i = 0; i < N; i++) {
  if (desk[i] === 'P') {
    for (let j = i - K; j <= i + K; j++) {
      if (j < 0 || j > N) continue;
      if (desk[j] === 'H') {
        desk[j] = 'X';
        eat++;
        break;
      }
    }
  }
}

console.log(eat);
