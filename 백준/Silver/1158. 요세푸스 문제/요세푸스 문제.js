const fs = require('fs');
let input = fs.readFileSync(0, 'utf-8').toString().trim().split(' ');

let N = Number(input[0]);
let K = Number(input[1]);

let queue = Array.from({ length: N }, (_, index) => index + 1);

let answer = '';
while (queue.length !== 0) {
  for (let i = 0; i < K - 1; i++) {
    queue.push(queue.shift());
  }
  answer += queue.shift() + ' ';
}

answer = answer.trim().replaceAll(' ', ', ');
console.log(`<${answer}>`);