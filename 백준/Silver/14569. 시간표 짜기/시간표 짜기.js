const fs = require('fs');
let [N, ...input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);

let index = 0;
let classList = [];

for (let i = 0; i < N; i++) {
  let timetable = input[index++].trim().split(' ').map(Number);
  classList.push(timetable.splice(1));
}

let M = Number(input[index++]);
let answer = [];
for (let i = 0; i < M; i++) {
  let empty = input[index++].trim().split(' ').map(Number);
  let count = 0;
  empty.splice(0, 1);
  for (let j = 0; j < N; j++) {
    if (classList[j].every((value) => empty.includes(value))) {
      count++;
    }
  }
  answer.push(count);
}

console.log(answer.join('\n'));
