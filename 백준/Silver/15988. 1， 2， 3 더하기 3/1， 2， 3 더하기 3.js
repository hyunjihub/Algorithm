var fs = require('fs');
let [T, ...n] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

T = Number(T);
n = n.map(Number);

let dp = [0n, 1n, 2n, 4n];

for (let t = 0; t < T; t++) {
  let currentN = n[t];

  while (dp.length <= currentN) {
    let nextValue = (dp[dp.length - 1] + dp[dp.length - 2] + dp[dp.length - 3]) % 1000000009n;
    dp.push(nextValue);
  }

  console.log(dp[currentN].toString());
}
