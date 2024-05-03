var fs = require('fs');
let N = fs.readFileSync(0, 'utf-8').toString().trim();
N = BigInt(N);

let count = 1n;
for (let i = 2n; i <= N; i += 2n) {
  count = (i - 1n) * count;
}

count %= 1000000007n;

console.log(count.toString());