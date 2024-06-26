const fs = require('fs');
let [n, ...input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let N = Number(n.trim().split(' ')[0]);
let M = Number(n.trim().split(' ')[1]);

let dont = Array.from({ length: N + 1 }, () => Array(N + 1).fill(false));

for (let i = 0; i < M; i++) {
  let [a, b] = input[i].trim().split(' ').map(Number);
  dont[a][b] = true;
  dont[b][a] = true;
}

let set = new Set();
function DFS(iceCream, prev) {
  if (iceCream.length === 3) {
    set.add(iceCream.join(' '));
    return;
  }

  for (let i = prev + 1; i <= N; i++) {
    let isPossible = true;
    for (let j = 0; j < iceCream.length; j++) {
      if (dont[iceCream[j]][i]) {
        isPossible = false;
        break;
      }
    }
    if (isPossible) {
      DFS([...iceCream, i], i);
    }
  }
}

DFS([], 0);
console.log(set.size);
