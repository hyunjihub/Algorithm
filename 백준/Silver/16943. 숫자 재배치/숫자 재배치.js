var fs = require('fs');
let n = fs.readFileSync(0, 'utf-8').toString().trim();

let [A, B] = n.trim().split(' ').map(Number);
let num = String(A).split('').map(Number);

let numSet = new Set();
function DFS(depth, visited, current) {
  if (depth === num.length) {
    if (String(Number(current)).length === num.length) {
      numSet.add(Number(current));
    }
    return;
  }

  for (let i = 0; i < num.length; i++) {
    if (!visited[i]) {
      visited[i] = true;
      DFS(depth + 1, [...visited], current + num[i]);
      visited[i] = false;
    }
  }
}

let visited = Array.from({ length: num.length }, () => false);
let current = '';
for (let i = 0; i < num.length; i++) {
  if (!visited[i]) {
    visited[i] = true;
    DFS(1, [...visited], current + num[i]);
    visited[i] = false;
  }
}

numArr = Array.from(numSet).sort((a, b) => a - b);

let answer = 0;
for (let i = 0; i < numArr.length; i++) {
  if (numArr[i] < B) {
    answer = numArr[i];
  } else break;
}

console.log(answer !== 0 ? answer : -1);
