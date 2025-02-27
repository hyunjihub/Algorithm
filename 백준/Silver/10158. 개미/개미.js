const fs = require('fs');
let [size, start, t] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let [w, h] = size.trim().split(' ').map(Number);
let [p, q] = start.trim().split(' ').map(Number);
t = Number(t);

let endP = p + t;
let endQ = q + t;

let answer = [0, 0];
if (Math.floor(endP / w) % 2 === 0) {
  answer[0] = endP % w;
} else {
  answer[0] = w - (endP % w);
}

if (Math.floor(endQ / h) % 2 === 0) {
  answer[1] = endQ % h;
} else {
  answer[1] = h - (endQ % h);
}

console.log(answer.join(' '));
