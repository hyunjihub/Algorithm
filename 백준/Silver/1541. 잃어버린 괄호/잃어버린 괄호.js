var fs = require('fs');
let expression = fs.readFileSync(0, 'utf-8').toString().trim();

expression = expression.trim().split('-');

function calculate(my_string) {
  return my_string.split('+').reduce((acc, curr) => acc + Number(curr), 0);
}

let sum = calculate(expression[0]);
for (let i = 1; i < expression.length; i++) {
  expression[i] = calculate(expression[i]);
  sum -= expression[i];
}

console.log(sum);
