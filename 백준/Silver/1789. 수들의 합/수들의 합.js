var fs = require('fs');
let S = fs.readFileSync(0, 'utf-8').toString().trim();

S = Number(S);

let sum = 0;
let count = 0;
for (let i = 1; i <= S; i++) {
  if (sum + i <= S) {
    sum += i;
  } else break;
  count++;
}

console.log(count);
