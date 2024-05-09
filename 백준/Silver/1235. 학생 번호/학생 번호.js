const fs = require('fs');
let [n, ...numbers] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let set = new Set();
for (let i = 1; i <= numbers[0].length; i++) {
  set.clear();
  for (let j = 0; j < numbers.length; j++) {
    set.add(numbers[j].trim().slice(-1 * i));
  }
  if (set.size === numbers.length) {
    console.log(i);
    break;
  }
}
