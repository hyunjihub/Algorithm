var fs = require('fs');
let n = fs.readFileSync(0, 'utf-8').toString().trim();

let bigIntN = BigInt(n);
let small = 0n;
let big = bigIntN;
let mid = 1n;

while (small <= big) {
  mid = (big + small) / 2n;
  let cal = mid ** 2n;

  if (cal === bigIntN) {
    break;
  } else if (cal < bigIntN) {
    small = mid + 1n;
  } else {
    big = mid - 1n;
  }
}

if (mid ** 2n < bigIntN) {
  mid = mid + 1n;
}

console.log(mid.toString());
