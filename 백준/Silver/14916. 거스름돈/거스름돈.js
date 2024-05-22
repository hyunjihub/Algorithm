var fs = require('fs');
let n = fs.readFileSync(0, 'utf-8').toString().trim();

n = Number(n);

let count = 0;
if (n === 1 || n === 3) {
  count = -1;
} else {
  count = Math.floor(n / 5);
  n %= 5;

  if (n % 2 === 0) {
    count += n / 2;
  } else {
    count--;
    n += 5;
    if (n % 2 === 0) {
      count += n / 2;
    } else {
      count = -1;
    }
  }
}

console.log(count);
