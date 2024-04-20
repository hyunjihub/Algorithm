const fs = require('fs');
let [n, input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

const N = parseInt(n.trim().split(' ')[0]);
const M = parseInt(n.trim().split(' ')[1]);

let number = input.trim().split(' ').map(Number);
number.sort((a, b) => a - b);
let set = new Set();
let arr = [];

DFS(0, 0);
let answer = '';
set.forEach((value) => {
  answer += value + '\n';
});
console.log(answer.trim());

function DFS(start, depth) {
  if (depth === M) {
    set.add(arr.join(' '));
    return;
  }

  for (let i = start; i < N; i++) {
    arr.push(number[i]);
    DFS(i, depth + 1);
    arr.pop();
  }
}
