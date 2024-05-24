const fs = require('fs');
let input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let A = 0;
let B = 0;
for (let i = 0; i < 2; i++) {
  input[i] = input[i].trim().split(' ').map(Number);
}

function LCM(num1, num2) {
  for (let i = 1; ; i++) {
    if ((num1 * i) % num2 === 0) return num1 * i;
  }
}

let mul = LCM(input[0][1], input[1][1]);
input[0][0] *= mul / input[0][1];
input[0][1] = mul;
input[1][0] *= mul / input[1][1];
input[1][1] = mul;

function GCD(num1, num2) {
  let min = Math.min(num1, num2);

  for (let i = 2; i <= min; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      num1 /= i;
      num2 /= i;
      i--;
      min = Math.min(num1, num2);
    }
  }

  return [num1, num2];
}

console.log(GCD(input[0][0] + input[1][0], input[0][1]).join(' '));
