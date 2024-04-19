const fs = require('fs');
let [n, input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let N = parseInt(n.trim().split(' ')[0].trim());
let M = parseInt(n.trim().split(' ')[1].trim());

input = input
  .trim()
  .split(' ')
  .map((value) => parseInt(value))
  .sort((a, b) => a - b);

let checked = Array.from({ length: N }, () => false);
let sequence = new Set();
let arr = [];

DFS(0);
sequence = Array.from(sequence);
console.log(sequence.join('\n'));

function DFS(depth) {
  if (depth === M) {
    sequence.add(arr.join(' '));
    return;
  }

  for (let i = 0; i < N; i++) {
    if (!checked[i]) {
      arr.push(input[i]);
      checked[i] = true;
      DFS(depth + 1);
      checked[i] = false;
      arr.pop();
    }
  }
}
