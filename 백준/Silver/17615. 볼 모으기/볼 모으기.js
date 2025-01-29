const fs = require('fs');
let [N, balls] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);

let color = [];
let current = balls[0];
let count = 1;
for (let i = 1; i < balls.length; i++) {
  if (current === balls[i]) {
    count++;
  } else {
    color.push([current, count]);
    current = balls[i];
    count = 1;
  }
  if (i === balls.length - 1) color.push([current, count]);
}

let min = Infinity;
function toLeft(start) {
  let count = 0;
  for (let i = 1; i < color.length; i++) {
    if (color[i][0] !== start) count += color[i][1];
  }

  min = Math.min(count, min);
}

function toRight(end) {
  let count = 0;
  for (let i = 0; i < color.length - 1; i++) {
    if (color[i][0] !== end) count += color[i][1];
  }

  min = Math.min(count, min);
}

toLeft('R');
toLeft('B');
toRight('R');
toRight('B');

console.log(min);
