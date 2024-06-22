var fs = require('fs');
let command = fs.readFileSync(0, 'utf-8').toString().trim();

command = command.replace(';', '').split(', ');

let dup = '';
let answer = '';
let variable = '';
for (let i = 0; i < command.length; i++) {
  if (i === 0) {
    dup = command[i].split(' ')[0];
    variable = command[i].split(' ')[1];
  } else variable = command[i];

  let index = 0;
  let variableName = '';
  while (true) {
    if (variable.charAt(index) === '[' || variable.charAt(index) === '&' || variable.charAt(index) === '*') break;
    if (index === variable.length) break;
    variableName += variable.charAt(index++);
  }

  let add = variable.substring(index).split('').reverse().join('');
  add = add.replaceAll('][', '[]');

  answer += `${dup}${add} ${variableName};` + '\n';
}

console.log(answer.trim());
