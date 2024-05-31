const fs = require('fs');
let [N, ...input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);

let heart = [null, null];
let arm = [null, null];
for (let i = 0; i < input.length; i++) {
  input[i] = input[i].trim();
  if (input[i].indexOf('*') !== input[i].lastIndexOf('*')) {
    heart[0] = i;
    arm = [heart[1] - input[i].indexOf('*'), input[i].lastIndexOf('*') - heart[1]];
    break;
  } else {
    heart[1] = input[i].indexOf('*');
  }
}
console.log(`${heart[0] + 1} ${heart[1] + 1}`);

let leg = [null, null];
let waist = 0;
for (let i = heart[0] + 1; i < input.length; i++) {
  input[i] = input[i].trim();
  if (input[i].indexOf('*') !== input[i].lastIndexOf('*')) {
    leg = [i - waist, i - waist];
  } else {
    if (input[i].indexOf('*') === heart[1]) waist = i;
    else if (input[i].indexOf('*') === heart[1] - 1) leg[0] = i - waist;
    else if (input[i].indexOf('*') === heart[1] + 1) leg[1] = i - waist;
  }
}

let body = [arm[0], arm[1], waist - heart[0], leg[0], leg[1]];
console.log(body.join(' '));
