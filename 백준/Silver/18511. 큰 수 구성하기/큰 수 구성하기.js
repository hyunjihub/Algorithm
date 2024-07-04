const fs = require('fs');
let [n, element] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let [N, K] = n.trim().split(' ').map(Number);
element = element.trim().split(' ').map(Number);
let max = 0;

function DFS(number) {
  let num = Number(number.join(''));
  if (number.length > 0 && num > N) return;
  if (max < num) max = num;

  if (number.length === N.length) return;

  for (let i = 0; i < K; i++) {
    DFS([...number, element[i]]);
  }
}

DFS([]);
console.log(max);
