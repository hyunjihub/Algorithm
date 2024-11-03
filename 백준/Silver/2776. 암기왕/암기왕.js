const fs = require('fs');
let [T, ...input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

T = Number(T);
let index = 0;
for (let i = 0; i < T; i++) {
  let N = Number(input[index++]);
  let note1 = new Set(input[index++].trim().split(' ').map(Number));
  let M = Number(input[index++]);
  let note2 = input[index++].trim().split(' ').map(Number);

  let answer = '';
  for (let i = 0; i < M; i++) {
    if (note1.has(note2[i])) {
      answer += 1;
    } else {
      answer += 0;
    }
    answer += '\n';
  }

  console.log(answer.trim());
}
