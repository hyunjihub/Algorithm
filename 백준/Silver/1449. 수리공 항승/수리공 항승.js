const fs = require('fs');
let [n, location] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let N = Number(n.trim().split(' ')[0]);
let L = Number(n.trim().split(' ')[1]);

location = location.trim().split(' ').map(Number);
location.sort((a, b) => a - b);

let end = 0;
let answer = 0;
for (let i = 0; i < N; i++) {
  if (end < location[i] + 0.5) {
    answer++;
    end = location[i] - 0.5 + L;
  }
}

console.log(answer);
