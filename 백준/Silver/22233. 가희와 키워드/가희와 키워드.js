const fs = require('fs');
let [n, ...input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let [N, M] = n.trim().split(' ').map(Number);
let keyword = input.slice(0, N).reduce((acc, cur) => {
  acc.push(cur.trim());
  return acc;
}, []);

let written = input.slice(N).reduce((acc, cur) => {
  acc.push(cur.trim().split(','));
  return acc;
}, []);

keyword = new Set(keyword);
let answer = '';

for (let i = 0; i < written.length; i++) {
  for (let j = 0; j < written[i].length; j++) {
    if (keyword.has(written[i][j])) {
      keyword.delete(written[i][j]);
    }
  }
  answer += keyword.size + '\n';
}

console.log(answer.trim());
