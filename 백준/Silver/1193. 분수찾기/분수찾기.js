var fs = require('fs');
var N = fs.readFileSync('/dev/stdin').toString().trim();

let num = 1;
let sum = 0;
while (true) {
  if (sum >= N) {
    sum -= --num;
    break;
  }
  sum += num++;
}

let split = [];
let start = '';
if (num % 2 === 0) {
  start = 1 + '/' + num;
  for (let i = sum + 1; i < N; i++) {
    split = start.split('/');
    start = parseInt(split[0]) + 1 + '/' + (parseInt(split[1]) - 1);
  }
} else {
  start = num + '/' + 1;
  for (let i = sum + 1; i < N; i++) {
    split = start.split('/');
    start = parseInt(split[0]) - 1 + '/' + (parseInt(split[1]) + 1);
  }
}

console.log(start);
