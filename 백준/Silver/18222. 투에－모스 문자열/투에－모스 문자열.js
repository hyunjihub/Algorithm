const fs = require('fs');
let k = fs.readFileSync(0, 'utf-8').toString().trim();
k = BigInt(k);

function find(x) {
  if (x === 0n) {
    return 0;
  } else if (x === 1n) {
    return 1;
  } else if (x % 2n === 0n) {
    return find(x / 2n);
  } else {
    return 1 - find(x / 2n);
  }
}

console.log(find(k - 1n));
