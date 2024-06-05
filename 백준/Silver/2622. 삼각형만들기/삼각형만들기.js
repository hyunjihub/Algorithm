var fs = require('fs');
let num = fs.readFileSync(0, 'utf-8').toString().trim();

num = Number(num);

let count = 0;
if (num === 1 || num === 2 || num === 4) console.log(0);
else {
  for (let i = 1; i <= num; i++) {
    for (let j = i; j <= num; j++) {
      let k = num - i - j;
      if (k < j) break;
      if (i + j > k) count++;
    }
  }
  console.log(count);
}
