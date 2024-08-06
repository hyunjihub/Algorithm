const fs = require('fs');
let [n, num, m, ...relation] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

n = Number(n);
let person1 = Number(num.trim().split(' ')[0]);
let person2 = Number(num.trim().split(' ')[1]);
m = Number(m);

let family = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));

for (let i = 0; i < m; i++) {
  let [parent, child] = relation[i].trim().split(' ').map(Number);
  family[parent][child] = 1;
  family[child][parent] = 1;
}

let visited = Array(n + 1).fill(false);
let queue = [[person1, 0]];
visited[person1] = true;

let answer = -1;
while (queue.length > 0) {
  let [current, count] = queue.shift();

  if (current === person2) {
    answer = count;
    break;
  }

  for (let i = 1; i <= n; i++) {
    if (!visited[i] && family[current][i] === 1) {
      visited[i] = true;
      queue.push([i, count + 1]);
    }
  }
}

console.log(answer);
