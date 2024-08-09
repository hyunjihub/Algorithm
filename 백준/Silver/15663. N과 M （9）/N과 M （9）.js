const fs = require('fs');
let [n, element] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let N = Number(n.trim().split(' ')[0]);
let M = Number(n.trim().split(' ')[1]);

element = element.trim().split(' ').map(Number);

let set = new Set();
function DFS(depth, sequence, visited) {
  if (depth === M) {
    set.add(sequence.join(' '));
    return;
  }

  for (let i = 0; i < element.length; i++) {
    if (!visited[i]) {
      visited[i] = true;
      DFS(depth + 1, [...sequence, element[i]], visited);
      visited[i] = false;
    }
  }
}

let visited = Array.from({ length: N }, () => false);
for (let i = 0; i < element.length; i++) {
  visited[i] = true;
  DFS(1, [element[i]], visited);
  visited[i] = false;
}

let sorted = Array.from(set);
sorted.sort((a, b) => {
  let num1 = a.split(' ').map(Number);
  let num2 = b.split(' ').map(Number);

  for (let i = 0; i < M; i++) {
    if (num1[i] < num2[i]) return -1;
    else if (num1[i] > num2[i]) return 1;
  }
});

console.log(sorted.join('\n'));
