const fs = require('fs');
let n = fs.readFileSync(0, 'utf-8').toString().trim();

let [A, B] = n.trim().split(' ');

let num = new Set();

let queue = [];
queue.push([A, 0]);
num.add(Number(A));

let count = -1;
let calculate = 0;
while (queue.length) {
  let number = queue.shift();

  if (BigInt(number[0]) === BigInt(B)) {
    count = number[1];
    break;
  }

  if (BigInt(number[0]) * 2n <= BigInt(B)) {
    calculate = Number(number[0]) * 2;
    if (!num.has(calculate)) {
      queue.push([calculate.toString(), number[1] + 1]);
      num[calculate] = true;
    }
  }
  if (BigInt(number[0] + 1) <= BigInt(B)) {
    calculate = Number(number[0] + 1);
    if (!num.has(calculate)) {
      queue.push([calculate.toString(), number[1] + 1]);
      num[calculate] = true;
    }
  }
}

console.log(count !== -1 ? count + 1 : count);
