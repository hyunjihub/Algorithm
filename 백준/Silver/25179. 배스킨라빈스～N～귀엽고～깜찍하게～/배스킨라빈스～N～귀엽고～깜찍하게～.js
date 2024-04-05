let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let a = BigInt(input[0]); 
let b = BigInt(input[1]); 

if ((a - BigInt(1)) % (b + BigInt(1)) === BigInt(0)) {
  console.log("Can't win");
} else {
  console.log('Can win');
}
