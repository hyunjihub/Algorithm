const fs = require('fs');
let [n, array] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
array = array.trim().split(' ').map(Number);

let N = Number(n.trim().split(' ')[0]);
let S = Number(n.trim().split(' ')[1]);

let count = 0;

function DFS(sum, prev) {
  if (sum === S) {
    count++;
  }

  for (let i = prev + 1; i < N; i++) {
    DFS(sum + array[i], i);
  }
}

for (let i = 0; i < N; i++) {
  DFS(array[i], i);
}

console.log(count);
