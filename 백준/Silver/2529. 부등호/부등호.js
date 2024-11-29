const fs = require('fs');
let [k, inequalitySign] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
k = Number(k);
inequalitySign = inequalitySign.trim().split(' ');

let min = Infinity;
let max = -Infinity;

function DFS(depth, used, num, prev) {
  if (depth === k) {
    min = Math.min(min, Number(num));
    max = Math.max(max, Number(num));
    return;
  }

  let sign = inequalitySign[depth];

  for (let i = 0; i < 10; i++) {
    if (!used[i]) {
      if (sign === '<' && prev < i) {
        used[i] = true;
        DFS(depth + 1, [...used], num + i, i);
        used[i] = false;
      } else if (sign === '>' && prev > i) {
        used[i] = true;
        DFS(depth + 1, [...used], num + i, i);
        used[i] = false;
      }
    }
  }
}

let usedArr = Array.from({ length: 10 }, () => false);
for (let i = 0; i < 10; i++) {
  usedArr[i] = true;
  DFS(0, [...usedArr], '' + i, i);
  usedArr[i] = false;
}

console.log(max.toString().padStart(k + 1, '0'));
console.log(min.toString().padStart(k + 1, '0'));
