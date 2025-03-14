var fs = require('fs');
let str = fs.readFileSync(0, 'utf-8').toString().trim();

str = str.split('');
let used = Array.from({ length: str.length }, () => false);
let answer = [];

function DFS(left, right) {
  if (left === right) return;

  let minStr = str.slice(left, right).sort()[0];
  let minIdx = str.slice(left, right).indexOf(minStr) + left;
  used[minIdx] = true;

  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (used[i]) result += str[i];
  }
  answer.push(result);

  DFS(minIdx + 1, right);
  DFS(left, minIdx);
}

DFS(0, str.length);

console.log(answer.join('\n'));
