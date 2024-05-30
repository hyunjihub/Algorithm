const fs = require('fs');
let [n, m, ...input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

n = Number(n);
m = Number(m);

let matrix = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));

for (let i = 0; i < m; i++) {
  input[i] = input[i].trim().split(' ').map(Number);

  matrix[input[i][0]][input[i][1]] = 1;
  matrix[input[i][1]][input[i][0]] = 1;
}

let infected = [1];
let visited = Array.from({ length: n + 1 }, () => false);
visited[1] = true;
let count = 0;
while (true) {
  if (infected.length === 0) break;
  let computer = infected.shift();
  count++;
  for (let i = 1; i <= n; i++) {
    if (matrix[computer][i] === 1 && !visited[i]) {
      infected.push(i);
      visited[i] = true;
    }
  }
}

console.log(count - 1);
