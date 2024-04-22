var fs = require('fs');
let N = fs.readFileSync(0, 'utf-8').toString().trim();

let str = ['I', 'V', 'X', 'L'];
N = Number(N);

let set = new Set();
let word = [];

DFS(0, 0);
console.log(set.size);

function DFS(depth, start) {
  if (depth === N) {
    set.add(cal(word.join('')));
    return;
  }

  for (let i = start; i < 4; i++) {
    word.push(str[i]);
    DFS(depth + 1, i);
    word.pop();
  }
}

function cal(str) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === 'I') sum += 1;
    else if (str.charAt(i) === 'V') sum += 5;
    else if (str.charAt(i) === 'X') sum += 10;
    else sum += 50;
  }
  return sum;
}
