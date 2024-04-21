var fs = require('fs');
let X = fs.readFileSync(0, 'utf-8').toString().trim();
let Xsplit = X.split('').map(Number);
Xsplit.sort((a, b) => a - b);
let checked = Array.from({ length: Xsplit.length }, () => false);
let min = Number(X);
let prev = 999999;
let arr = [];
let cal = 0;

function DFS(depth) {
  if (depth === Xsplit.length) {
    cal = parseInt(arr.join(''));
    if (min < cal && prev >= cal) {
      prev = cal;
      return;
    }
  }

  for (let i = 0; i < Xsplit.length; i++) {
    if (!checked[i]) {
      checked[i] = true;
      arr.push(Xsplit[i]);
      DFS(depth + 1);
      arr.pop();
      checked[i] = false;
    }
  }
}

DFS(0);
if (prev === 999999) console.log(0);
else console.log(prev);
