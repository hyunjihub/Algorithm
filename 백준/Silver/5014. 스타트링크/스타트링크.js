const fs = require('fs');
let [F, S, G, U, D] = fs.readFileSync(0, 'utf-8').toString().trim().split(' ').map(Number);

let visited = Array.from({ length: F + 1 }, () => false);
visited[0] = true;
visited[S] = true;

let queue = [[S, 0]];
while (queue.length) {
  let [current, count] = queue.shift();
  if (current === G) return console.log(count);

  if (current + U <= F && !visited[current + U]) {
    visited[current + U] = true;
    queue.push([current + U, count + 1]);
  }
  if (current - D > 0 && !visited[current - D]) {
    visited[current - D] = true;
    queue.push([current - D, count + 1]);
  }
}

console.log('use the stairs');
