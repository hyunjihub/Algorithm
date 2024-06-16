const fs = require('fs');
let [N, cards, M, check] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);
M = Number(M);
cards = cards.trim().split(' ').map(Number);
check = check.trim().split(' ').map(Number);

let map = new Map(check.map((value, index) => [value, index]));
let answer = Array.from({ length: check.length }, () => 0);

for (let i = 0; i < cards.length; i++) {
  if (map.has(cards[i])) answer[map.get(cards[i])] = 1;
}

console.log(answer.join(' '));
