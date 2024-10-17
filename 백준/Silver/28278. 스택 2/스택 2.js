const fs = require('fs');
let [N, ...commands] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);
let stack = [];
let answer = '';
for (let i = 0; i < N; i++) {
  let [command, value] = commands[i].trim().split(' ').map(Number);

  switch (command) {
    case 1:
      stack.push(value);
      break;

    case 2:
      if (stack.length > 0) answer += stack.pop();
      else answer += -1;
      break;

    case 3:
      answer += stack.length;
      break;

    case 4:
      if (stack.length === 0) answer += 1;
      else answer += 0;
      break;

    case 5:
      if (stack.length > 0) answer += stack[stack.length - 1];
      else answer += -1;
      break;

    default:
      break;
  }
  if (command !== 1) answer += '\n';
}

console.log(answer.trim());
