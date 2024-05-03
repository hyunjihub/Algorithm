var fs = require('fs');
let N = fs.readFileSync(0, 'utf-8').toString().trim();

let zero = 0;
for (let i = 0; i < N.length; i++) {
  if (N.charAt(i) === '0') {
    zero++;
  }
}
let one = (N.length - zero) / 2;
zero /= 2;

let oneRemove = '';
for (let i = 0; i < N.length; i++) {
  if (N.charAt(i) === '1' && one > 0) {
    one--;
  } else {
    oneRemove += N.charAt(i);
  }
}

let answer = '';
for (let i = oneRemove.length - 1; i >= 0; i--) {
  if (oneRemove.charAt(i) === '0' && zero > 0) {
    zero--;
  } else {
    answer = oneRemove.charAt(i) + answer;
  }
}

console.log(answer);
