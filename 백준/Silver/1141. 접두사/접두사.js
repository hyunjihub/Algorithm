const fs = require('fs');
let [N, ...word] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

word.sort((a, b) => b.trim().length - a.trim().length);

let set = new Set();

function getIsPrefix(word) {
  for (let setWord of set) {
    if (setWord.slice(0, word.length) === word) {
      return false;
    }
  }
  return true;
}

for (let i = 0; i < N; i++) {
  let isPossible = getIsPrefix(word[i].trim());
  if (isPossible) {
    set.add(word[i].trim());
  }
}

console.log(set.size);
