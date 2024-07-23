const fs = require('fs');
let [N, ...input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);

let stack = [];
let answer = '';
for (let command of input) {
  command = command.trim().split(' ');

  if (command[0] === 'push') {
    stack.push(Number(command[1]));
  } else if (command[0] === 'pop') {
    answer += stack.length === 0 ? `-1 \n` : `${stack.pop()} \n`;
  } else if (command[0] === 'size') {
    answer += stack.length + '\n';
  } else if (command[0] === 'empty') {
    answer += stack.length === 0 ? `1 \n` : `0 \n`;
  } else {
    answer += stack.length === 0 ? `-1 \n` : `${stack[stack.length - 1]} \n`;
  }
}

console.log(answer.trim());
