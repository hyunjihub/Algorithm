const fs = require('fs');
let [num, alpha] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
let [L, C] = num.trim().split(' ').map(Number);
alpha = alpha.trim().split(' ');
alpha.sort();

const regex = /^[aeiou]$/;
function isPossible(str) {
  let vowels = 0;
  for (let i = 0; i < str.length; i++) {
    if (regex.test(str[i])) {
      vowels++;
    }
  }

  return vowels >= 1 && str.length - vowels >= 2;
}

let combinations = new Set();
function DFS(current, prev) {
  if (current.length === L) {
    if (isPossible(current.join(''))) {
      combinations.add(current.join(''));
      return;
    }
  }

  for (let i = prev + 1; i < C; i++) {
    DFS([...current, alpha[i]], i);
    DFS([...current], i);
  }
}

DFS([], -1);
console.log(Array.from(combinations).join('\n'));
