const fs = require('fs');
let [T, ...input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

T = Number(T);
let index = 0;
let answer = '';
for (let i = 0; i < T; i++) {
  let N = Number(input[index++].trim());
  let num = Array.from({ length: N + 1 });
  let visited = Array.from({ length: N + 1 }, () => false);

  for (let j = 1; j <= N; j++) {
    num[j] = Number(input[index++].trim());
  }

  let queue = [num[1]];
  let K = 0;
  while (true) {
    if (queue.length === 0) {
      K = 0;
      break;
    }
    let current = queue.shift();
    K++;
    if (current === N) break;
    visited[current] = true;

    if (visited[num[current]]) {
      K = 0;
      break;
    } else {
      queue.push(num[current]);
      visited[num[current]] = true;
    }
  }

  answer += K + '\n';
}

console.log(answer.trim());
