const fs = require('fs');
let [n, DNA, minCount] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let [S, P] = n.trim().split(' ').map(Number);
minCount = minCount.trim().split(' ').map(Number);
let answer = 0;

let count = [0, 0, 0, 0];
for (let i = 0; i < P; i++) {
  if (DNA[i] === 'A') count[0]++;
  else if (DNA[i] === 'C') count[1]++;
  else if (DNA[i] === 'G') count[2]++;
  else count[3]++;
}

let isPossible = true;
for (let i = 0; i < 4; i++) {
  if (minCount[i] > count[i]) {
    isPossible = false;
    break;
  }
}

if (isPossible) answer++;

for (let i = P; i < S; i++) {
  if (DNA[i] === 'A') count[0]++;
  else if (DNA[i] === 'C') count[1]++;
  else if (DNA[i] === 'G') count[2]++;
  else count[3]++;

  if (DNA[i - P] === 'A') count[0]--;
  else if (DNA[i - P] === 'C') count[1]--;
  else if (DNA[i - P] === 'G') count[2]--;
  else count[3]--;

  let isPossible = true;
  for (let i = 0; i < 4; i++) {
    if (minCount[i] > count[i]) {
      isPossible = false;
      break;
    }
  }
  if (isPossible) answer++;
}

console.log(answer);
