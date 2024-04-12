const fs = require('fs');
const [n, ...coins] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let N = parseInt(n.split(' ')[0].trim());
let K = parseInt(n.split(' ')[1].trim());

let count = 0;
for (let i = N - 1; i >= 0; i--) {
  coins[i] = parseInt(coins[i].trim());
  if (coins[i] <= K) {
    while (true) {
      if (K < coins[i]) break;
      K -= coins[i];
      count++;
    }
  }
  if (K === 0) break;
}

console.log(count);
