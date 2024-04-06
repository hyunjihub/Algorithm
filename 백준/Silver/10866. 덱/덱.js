const fs = require('fs');
const [n, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let deque = [];
let answer = '';
let num = 0;
for (let i = 0; i < n; i++) {
  input[i] = input[i].trim().split(' ');
  if (input[i][0] === 'push_back') {
    deque.push(parseInt(input[i][1]));
  } else if (input[i][0] === 'push_front') {
    deque.unshift(parseInt(input[i][1]));
  } else if (input[i][0] === 'pop_front') {
    num = deque.shift();
    answer += (num === undefined ? -1 : num) + '\n';
  } else if (input[i][0] === 'pop_back') {
    num = deque.pop();
    answer += (num === undefined ? -1 : num) + '\n';
  } else if (input[i][0] === 'size') {
    answer += deque.length + '\n';
  } else if (input[i][0] === 'empty') {
    answer += (deque.length === 0 ? 1 : 0) + '\n';
  } else if (input[i][0] === 'front') {
    answer += (deque[0] === undefined ? -1 : deque[0]) + '\n';
  } else if (input[i][0] === 'back') {
    answer += (deque[deque.length - 1] === undefined ? -1 : deque[deque.length - 1]) + '\n';
  }
}

console.log(answer.trim());
