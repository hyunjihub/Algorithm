const fs = require('fs');
let input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let T = input.length - 1;

let number = [];
let k = 0;
for (let i = 0; i < T; i++) {
  let set = new Set();
  [k, ...number] = input[i].trim().split(' ').map(Number);

  function DFS(depth, prevIndex, numbers) {
    if (depth === 6) {
      set.add(numbers.join(' '));
      return;
    }

    for (let j = prevIndex + 1; j < k; j++) {
      DFS(depth + 1, j, [...numbers, number[j]]);
    }
  }

  for (let j = 0; j < k; j++) {
    DFS(1, j, [number[j]]);
  }

  let answer = Array.from(set);
  console.log(answer.join('\n'));
  if (i !== T - 1) console.log();
}
