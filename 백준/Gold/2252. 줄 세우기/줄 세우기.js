const fs = require('fs');
let [num, ...info] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let [N, M] = num.split(' ').map(Number);
info = info.map((i) => i.trim().split(' ').map(Number));

let student = Array.from({ length: N + 1 }, () => 0);
let link = Array.from({ length: N + 1 }, () => []);
for (let i = 0; i < M; i++) {
  let [A, B] = info[i];
  student[B]++;
  link[A].push(B);
}

let queue = [];
for (let i = 1; i < student.length; i++) {
  if (student[i] === 0) queue.push(i);
}

let answer = [];
while (queue.length) {
  let cur = queue.shift();
  answer.push(cur);

  for (let i = 0; i < link[cur].length; i++) {
    student[link[cur][i]]--;
    if (student[link[cur][i]] === 0) queue.push(link[cur][i]);
  }
}

console.log(answer.join(' '));
