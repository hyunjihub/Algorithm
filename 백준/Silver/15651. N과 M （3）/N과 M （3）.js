const fs = require('fs');
let input = fs.readFileSync(0, 'utf-8').toString().trim().split(' ');

let N = parseInt(input[0]);
let M = parseInt(input[1]);

let set = new Set();
let sequence = [];

DFS(0);
set = Array.from(set);
console.log(set.toString().replaceAll(',', '\n'));

function DFS(depth) {
  if (depth === M) {
    set.add(sequence.toString().replaceAll(',', ' '));
    return;
  }
  for (let i = 1; i <= N; i++) {
    sequence.push(i);
    DFS(depth + 1);
    sequence.pop();
  }
}
