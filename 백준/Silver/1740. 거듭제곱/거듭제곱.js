var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim();

let n = BigInt(input);
let binary = '';
while (true) {
  if (n === 0n) break;
  binary = (n % 2n) + binary;
  n = n / 2n;
}

let answer = 0n;
let pow = 0n;
for (let i = binary.length - 1; i >= 0; i--) {
  answer += BigInt(binary.charAt(i)) * getPow(pow++);
}

console.log(answer.toString());

function getPow(n) {
  let pow = 1n;
  for (let i = 0n; i < n; i++) {
    pow *= 3n;
  }
  return pow;
}
