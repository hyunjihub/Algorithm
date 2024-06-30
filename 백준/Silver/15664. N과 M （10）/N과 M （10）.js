const fs = require('fs');
let [n, number] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let N = Number(n.trim().split(' ')[0]);
let M = Number(n.trim().split(' ')[1]);
number = number.trim().split(' ').map(Number);
number.sort((a, b) => a - b);

let set = new Set();

function DFS(depth, prev, sequence) {
  if (depth === M) {
    set.add(sequence.join(' '));
    return;
  }

  for (let i = prev + 1; i < number.length; i++) {
    DFS(depth + 1, i, [...sequence, number[i]]);
  }
}

for (let i = 0; i < number.length; i++) {
  DFS(1, i, [number[i]]);
}

let answer = '';
for (let seq of set) {
  answer += seq + '\n';
}
console.log(answer.trim());
