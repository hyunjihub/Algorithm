const fs = require('fs');
let [n, str, ...num] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

n = Number(n);
str = str.trim().split('');
num = num.map(Number);

let nums = [];

for (let i = 0; i < str.length; i++) {
  const ch = str[i];
  if (ch === '+' || ch === '-' || ch === '*' || ch === '/') {
    const b = nums.pop();
    const a = nums.pop();
    let result = 0;
    if (ch === '+') result = a + b;
    else if (ch === '-') result = a - b;
    else if (ch === '*') result = a * b;
    else if (ch === '/') result = a / b;
    nums.push(result);
  } else {
    const index = ch.charCodeAt(0) - 'A'.charCodeAt(0);
    nums.push(num[index]);
  }
}

console.log(nums[0].toFixed(2));
