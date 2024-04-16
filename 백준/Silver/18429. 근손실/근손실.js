const fs = require('fs');
let [n, input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let N = parseInt(n.trim().split(' ')[0]);
let K = parseInt(n.trim().split(' ')[1]);

let weight = 500;
const kit = input.trim().split(' ');

let routines = 0;
let used = Array.from({ length: N }, () => false);

DFS(0);
console.log(routines);

function DFS(depth) {
  if (depth === N) {
    routines++;
    return;
  }
  for (let i = 0; i < N; i++) {
    if (!used[i] && weight - K + parseInt(kit[i]) >= 500) {
      weight -= K;
      weight += parseInt(kit[i]);
      used[i] = true;
      DFS(depth + 1);
      used[i] = false;
      weight += K;
      weight -= parseInt(kit[i]);
    }
  }
}
