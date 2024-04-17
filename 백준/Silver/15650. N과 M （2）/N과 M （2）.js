var fs = require('fs');
let input = fs.readFileSync(0, 'utf-8').toString().trim();

let N = parseInt(input.trim().split(' ')[0]);
let M = parseInt(input.trim().split(' ')[1]);
let sequence = [];
let arr = [];
let checked = Array.from({ length: N }, () => false);

DFS(0);
console.log(sequence.toString().replaceAll(',', '\n'));

function DFS(depth) {
  if (depth === M) {
    sequence.push(arr.toString().replaceAll(',', ' '));
    return;
  }

  for (let i = 0; i < N; i++) {
    if (!checked[i]) {
      if (arr.length === 0 || arr[arr.length - 1] < i + 1) {
        checked[i] = true;
        arr.push(i + 1);
        DFS(depth + 1);
        arr.pop();
        checked[i] = false;
      }
    }
  }
}
