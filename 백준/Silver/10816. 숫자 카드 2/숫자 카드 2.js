const fs = require('fs');
let [N, card, M, number] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);
card = card.trim().split(' ').map(Number);
M = Number(M);
number = number.trim().split(' ').map(Number);

let map = new Map();

for (let i = 0; i < N; i++) {
  if (map.has(card[i])) {
    map.set(card[i], map.get(card[i]) + 1);
  } else map.set(card[i], 1);
}

let answer = [];
for (let i = 0; i < M; i++) {
  if (map.has(number[i])) answer.push(map.get(number[i]));
  else answer.push(0);
}

console.log(answer.join(' '));
